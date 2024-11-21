import React, { useState, useEffect } from 'react';
// import '.../styles/website.css';

const Circle = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setTargetPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const moveCircle = () => {
            let currentPos = position;
            
            const animate = () => {
                const ease = 0.10; // Adjust for slower movement
                const x = currentPos.x + (targetPosition.x - currentPos.x) * ease;
                const y = currentPos.y + (targetPosition.y - currentPos.y) * ease;

                // Calculate: Distance between the current and target positions
                const distance = Math.sqrt((x - targetPosition.x) ** 2 + (y - targetPosition.y) ** 2);

                if (distance > 0.5) { // Continue moving if not within threshold
                    currentPos = { x, y };
                    setPosition(currentPos);
                    requestAnimationFrame(animate); // Keep the loop going
                } else {
                    setPosition(targetPosition); // Snap to target position
                }
            };

            animate();
        };

        moveCircle();
    }, [targetPosition]);

    return (
        <div
            className="circle"
            style={{
                left: position.x + 20,
                top: position.y - 20,
            }}
        />
    );
};

export default Circle;
