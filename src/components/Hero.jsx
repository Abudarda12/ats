import './style/hero.css'

export default function Hero(){
    return(
        <>
         <main>
            <div className="main-left">
                <h1>Innovating Today <br />
                    for a Secure and <br />
                   Sustainable <br /> Tomorrow
                </h1>
                <p>
                    Our approach is not just about solving today’s challenges, it’s about shaping a future where businesses thrive with agility, security, and sustainable growth.
                </p>
                <div className="main-btn">
                    <div className="schedule">
                        <button>Schedule a Free Consultant</button>
                    </div>
                    <div className="service">
                        <button>Service</button>
                    </div>
                </div>
            </div>
            <div className="main-right">
                <div className="image">
                     <img src="src\components\image\1-1.png" alt="right image" height={"500px"} />
                </div>
            </div>
         </main>
        </>
    )
}