import styleBubble from "../styles/styleBubble.css";
import UniLife from "../styles/UniLife.css"

function UniversityLife() {

    const bubbleCount = 70;
    const getRandomValue = () => Math.floor(Math.random() * 30) + 10; // Random value between 10 and 30

    return (
        <body className="bubble-body">
            <div className="container">
                
                <div className="bubbles">
                {[...Array(bubbleCount)].map((_,index) => (
                    <span
                    key={index}
                    style={{ "--i": getRandomValue() }} // Apply random value for each span
                ></span>
                ))}
                </div>

                <div className="uni-year-content">
                    <h1> Where do we start with?</h1>

                    <div className="uni-year-button-group">

                        <a href="/university-life/uni-year1" className="year-1-button">
                            <div>YEAR 1</div>
                        </a>

                        <a href="/university-life/uni-year2" className="year-2-button">
                            <div>YEAR 2</div>
                        </a>

                        <a href="/university-life/uni-year3" className="year-3-button">
                            <div>YEAR 3</div>
                        </a>

                        <a href="/university-life/uni-year4" className="year-4-button">
                            <div>YEAR 4</div>
                        </a>
                        
                        {/* <button className="year-2-button"> 
                            <a href="/uni-year2"> YEAR 2</a>
                        </button>
                        
                        <button className="year-3-button"> 
                            <a href="/uni-year3"> YEAR 3</a>
                        </button>
                        
                        <button className="year-4-button"> 
                            <a href="/uni-year4"> YEAR 4</a>
                        </button> */}

                    </div>
                </div>

            </div>

        </body>
        
    );
}

export default UniversityLife;