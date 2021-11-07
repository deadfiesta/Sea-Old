import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <div className="container">
            <div className="spacer"></div>
                    <div className="navbar-container">
                        <h4 className="branding"><span className="design">Design</span><span className="app">App</span></h4>
                        <ul className="tabs">
                            <li className="active">Home</li>
                            <li>Docs</li>
                            <li>Community</li>
                        </ul>
                    </div>
                </div>
        </nav>
    )
}

export default Navbar
