import '../styles/MainPage.css';
import sky_video from '../videos/sky_video.mp4';

function MainPage() {

    const main_title = "Hello There!";
    const bounce_duration = 1.6;


    return (
        
        <div>

            <div className='mainpage-title-container'>
                <video className='video-background' src={sky_video} autoPlay loop muted playsInline>
                
                </video>
                <h1 className='mainpage-title'> 
                        {main_title.split("").map(
                            (character, index) => 
                                (
                                    <span
                                        key={index}
                                        style={
                                            (index !== main_title.length - 1) // Check if it's not the last character
                                            ?   {
                                                    animation: `bounce_rotate ${bounce_duration}s ease infinite`,
                                                    animationDelay: `${index / 2 + 0.3}s`
                                                }
                                            :   {
                                                    animation: `bounce ${1.0}s ease infinite`
                                                } // Apply no animation delay for the last character   
                                        }
                                    >
                                        {character}
                                    </span> 
                                )
                            )
                        }          
                </h1>
                
            </div>
            
            <div className='mainpage-content-container'>
                <div className="mainpage-content">
                    <h1>
                        Welcome to my personal website!
                    </h1>

                    <p>
                        You may have came here to explore more about my personal life. 
                        In that case, you could start navigating across the 
                        <span class= 'highlight'> blue navigation bar </span> on top.
                        There is a lot to discover about me... My personal life, what I normally do, what I have studied, and MORE!

                    </p>

                    <p>
                        You may have came here to explore more about my personal life. 
                        In that case, you could start navigating across the 
                        <span class= 'highlight'> blue navigation bar </span> on top.
                        There is a lot to discover about me... My personal life, what I normally do, what I have studied, and MORE!

                    </p>

                    <p>
                        You may have came here to explore more about my personal life. 
                        In that case, you could start navigating across the 
                        <span class= 'highlight'> blue navigation bar </span> on top.
                        There is a lot to discover about me... My personal life, what I normally do, what I have studied, and MORE!

                    </p>

                    <p>
                        You may have came here to explore more about my personal life. 
                        In that case, you could start navigating across the 
                        <span class= 'highlight'> blue navigation bar </span> on top.
                        There is a lot to discover about me... My personal life, what I normally do, what I have studied, and MORE!

                    </p>
                    
                </div>
            </div>

        </div>
    );

}

export default MainPage;