import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMedium,
    faLinkedin,
    faTwitter,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
import "../style.css"

function Footer(){
    return(
        <footer className="footer">
            <a href="https://github.com/Enecode" className="github">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://medium.com/@isahjacob" className="medium">
                <FontAwesomeIcon icon={faMedium} size="2x" />
            </a>
            <a href="https://twitter.com/IsahJakub" className="twitter">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a> 
            <a href="https://www.linkedin.com/in/isahejacob/" className="linkedin">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </footer>
    )
}

export default Footer