import '../styles/website.css';
import '../styles/Achievements.css';
import Moogle from '../components/cursor-trackers/Moogle';

function Achievements() {


    return (
        
        <div>
            <Moogle/>
            <div className='webpage-container'>

                <h1 className='achievements-h1'>
                    MY ACHIEVEMENTS
                </h1>

                <div className='grid-container-achievements'>
                    <p className='webpage-info'>
                        RKS Adams Award (St Andrews Secondary School) - 2015
                        <br/> <br/>
                        
                        
                        MOE Edusave Bursary Awards - 2013, 2014, 2015
                        <br/>
                        - Top 10% in Cohort (Normal Academic)
                        <br/> <br/>
                        
                        
                        MOE Edusave Character Award - 2015
                        <br/>
                        - Top 2% in secondary school demonstrating exemplary character and outstanding personal qualities
                        <br/><br/>
                        

                        MOE EAGLES Award - 2017 (Guitar Ensemble)
                        <br/><br/>

                        MINDEF - High Achiever Award (Unit/Squadron Level)
                        <br/><br/>
                
                    </p>

                    <div className='achievements-photo-container'>
                        <img src={require("../images/degree_photo.jpg")} alt="Achievements" />
                        <img src={require("../images/degree_photo.jpg")} alt="Achievements" />
                        <img src={require("../images/degree_photo.jpg")} alt="Achievements" />
                        <img src={require("../images/degree_photo.jpg")} alt="Achievements" />
                        <img src={require("../images/degree_photo.jpg")} alt="Achievements" />
                        <img src={require("../images/degree_photo.jpg")} alt="Achievements" />
                        <img src={require("../images/degree_photo.jpg")} alt="Achievements" />
                    </div>


                </div>
                

            </div>
            

            

        </div>
    );

}

export default Achievements;