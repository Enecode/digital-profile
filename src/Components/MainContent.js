import React from "react";
import "../style.css"
import Header from "./Header";
function MainContent(){
    return(
        <div className="main">
            <Header />
            <div className="container"> 
                <h1 className="name">Isah Jacob</h1>
                <h2 className="role">Full Stack Engineer</h2>
            </div>
            <a type="email" className="btn" href="mail:isahjacob0@gmail.com">Email</a>
            <div  className="about--detail">
                <h2 className="about">About</h2>
                <p className="about-p">As a full-stack engineer, 
                    it is my goal to make a positive impact on software and products that enhance and empower people's lives. 
                    I really think that by creating tools that give communities more power, 
                    we can improve the world through code. 
                    Yes, let's change the world together!
                </p>

                <h2 className="interest">Interest</h2>
                <p className="interest-p">Technical Writer. Food expert. Music scholar. Reader. 
                    Internet fanatic. Chess Player. Volley ball player. 
                    Badmitton player. Entrepreneur. Coffee fanatic.
                </p>
            </div>
        </div>
    )

}

export default MainContent