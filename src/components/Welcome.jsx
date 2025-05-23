import './style/welcome.css'

export default function Welcome(){
    return (
        <>
        <div className="welcome-component">
            <div className="num-section">
                <div className="logo">
                    <img src="src\components\image\ats-logo2.png" alt="logo" />
                </div>
                <div className="exprience">
                    <div className="v"></div>
                    <h1>11 Years</h1>
                    <h3>Proven Track Record</h3>
                </div>
                <div className="satisfaction">
                    <div className="v"></div>
                    <h1>99%</h1>
                    <h3>Customer Satisfaction</h3>
                </div>
                <div className="accessablity">
                    <div className="v"></div>
                    <h1>09 Contries</h1>
                    <h3>Globally Accessible</h3>
                </div>
                <div className="client">
                    <div className="v"></div>
                    <h1>1,000+</h1>
                    <h3>Satisfied Clients</h3>
                </div>
            </div>
            <div className="text-section">
                <div className="heading">
                     <h1>Welcome to Asian Technology Solutions</h1>
                </div>
                
                <h3>
                   Welcome to Asian Technology Solutions
                   In an era defined by rapid technological advancements, evolving business landscapes, and increasing digital threats, organizations need more than just solutions - they need a strategic partner that empowers them to navigate complexity with confidence. Asian Technology Solutions (ATS) is that partner.
                </h3>
                <h3>
                    With a commitment to innovation, integrity, excellence, and collaboration, ATS delivers an integrated suite of services across Talent Solutions, Consulting, IT Solutions, Cyber Security, and Fraud Prevention.
                </h3>
            </div>
            <div className="card-section">
                <div className="card">
                    <img src="src\components\image\accountability.png" alt="stack" />
                    <h1>INNOVATION</h1>
                    <h3>Cultivating creativity and forward-thinking
                         to deliver state-of-the-art solutions.
                    </h3>
                </div>
                <div className="card">
                    <img src="src\components\image\stack.png" alt="stack" />
                    <h1>Integrity</h1>
                    <h3>Upholding ethical practices and transparency in every engagement.
                    </h3>
                </div>
                <div className="card">
                    <img src="src\components\image\feedback.png" alt="stack" />
                    <h1>Excellence</h1>
                    <h3>Committing to the highest standards in service delivery and client satisfaction.
                    </h3>
                </div>
                <div className="card">
                    <img src="src\components\image\trust.png" alt="stack" />
                    <h1>Collaboration</h1>
                    <h3>Building lasting partnerships founded on trust and shared success.
                    </h3>
                </div>
            </div>
            <hr />
        </div>
        </>
    )
}