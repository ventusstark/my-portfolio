import Education from '../styles/Education.css';
import styleOldMarble from '../styles/styleOldmarble.css';



function EducationPage() {

    return (
        
        <body className='black-body'> {/* To cover up the white parts on the sides (for shake effect) */}
            <div className='old-marble-body'> 

                <div className="education-container">
                    <video autoPlay loop muted playsInline className='old-marble-background-overlay'>
                        <source src="https://ventusstark-singapore-my-portfolio-s3bucket.s3.ap-southeast-1.amazonaws.com/videos/old_film_grain_overlay.mp4" type="video/mp4" />
                    </video>

                    <div className='education-content'>
                        <br/>
                        <br/>
                        <h1>where should we relive those moments? </h1>
                        <h1> (i'm so old... <span className='h1-smaller'> enough </span> ) </h1>

                        <div className='education-button-group'>

                            
                            <a href="/education/primary-school" className="primary-school-button">
                                <div>PRIMARY SCHOOL</div>
                            </a>

                            <a href="/education/secondary-school" className="secondary-school-button">
                                <div>SECONDARY SCHOOL</div>
                            </a>

                            <a href="/education/post-secondary" className="post-secondary-button">
                                <div>POST SECONDARY</div>
                            </a>
                        </div>
                    </div>
                    
                </div>

            </div>    
        </body>

    );


}

export default EducationPage;