import '../styles/MainPage.css';
import Moogle from '../components/cursor-trackers/Moogle';

function MainPage() {

    const main_title = "Hello There!";
    const bounce_duration = 1.6;


    return (
        
        <div>
            <Moogle/>
            <div className='mainpage-title-container'>

                <video autoPlay loop muted playsInline className='video-background'  > 
                    <source src="/videos/sky_video.mp4" type="video/mp4" />
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
                        <span class= 'highlight-blue'> blue navigation bar </span> on top.
                        There is a lot to discover about me... My personal life, what I normally do, what I have studied, and MORE!

                    </p>

                    <h1>
                        WALKTHROUGH
                    </h1>

                    <p>
                        In case you are still wondering how my portfolio works, I have divided them into three different
                        distinct sections, namely "About Me", "Education", and "University Life". If you hover them with your mouse,
                        you could also find out MORE DETAILS regarding each segment across my personal life.

                    </p>

                    
                </div>
            </div>

        </div>
    );

}

export default MainPage;