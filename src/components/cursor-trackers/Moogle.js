import React, { useState, useEffect } from 'react';

const Moogle = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

    const [animationState, setAnimationState] = useState('stationary'); // 'moving', 'slowing', 'stationary'

    const [isStationary, setIsStationary] = useState(false);

    useEffect(() => {
        let timeoutId;
        const handleMouseMove = (event) => {
            setTargetPosition({ x: event.clientX, y: event.clientY });
            setAnimationState('moving');
            // setIsStationary(false); // Reset stationary state on mouse move
            

            // Clear previous timeout and set a new one
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {

                setAnimationState('slowing');
                // setIsStationary(true); // Set stationary state after delay
                setTimeout(() => {
                    setAnimationState('stationary'); // Finally, switch to "stationary" for floating effect
                }, 1000); // Delay for "moogleDim" to complete before switching to "float"
            }, 300);


        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);

            clearTimeout(timeoutId); // Clean up timeout on unmount
        };
    }, []);

    useEffect(() => {
        const moveMoogle = () => {
            let currentPos = position;
            
            const animate = () => {
                const ease = 0.10; // Adjust for slower movement
                const x = currentPos.x + (targetPosition.x - currentPos.x) * ease;
                const y = currentPos.y + (targetPosition.y - currentPos.y) * ease;

                // Calculate: Distance between the current and target positions
                const distance = Math.sqrt((x - targetPosition.x) ** 2 + (y - targetPosition.y) ** 2);

                if (Math.abs(distance) > 0.5) { // Continue moving if not within threshold
                    currentPos = { x, y };
                    setPosition(currentPos);
                    requestAnimationFrame(animate); // Keep the loop going
                } else {
                    setPosition(targetPosition); // Snap to target position
                }
            };

            animate();
        };

        moveMoogle();
    }, [targetPosition]);

    return (
        <div
            className={`moogle ${animationState}`}
            style={{
                left: position.x + 20,
                top: position.y - 20,
            }}
        />
    );
};

export default Moogle;
