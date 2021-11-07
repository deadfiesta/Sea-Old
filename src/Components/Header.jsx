import React from 'react'
import Arrow from './Arrow'
import Rocket from './Rocket'

const Header = () => {
    return (
        <header>
            <div className="container">
                <ul className="header-container">
                    <li className="left">
                        <div className="slogan">
                            <h1>Design Made Easy.</h1>
                        </div>
                        <div className="description">
                            <p>
                                Programmatically get data from <span className="em">Figma</span> and other design tools. Get any type of data from the design - no matter what tool you use to create it.
                            </p>
                        </div>
                        <div className="button-container">
                        <button className="cta inline">
                            <h3>Get Started</h3><Arrow />
                        </button>
                        <button className="cta-secondary inline">
                            <h3>Learn More</h3><Arrow />
                        </button>
                        </div>
                    </li>
                    <li className="right">
                        <div className="rocket-container">
                            <Rocket />
                        </div>
                    </li>
                </ul>
            </div>

        </header>
    )
}

export default Header
