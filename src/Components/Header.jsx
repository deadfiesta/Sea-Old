import React from 'react'
import { useRef } from 'react';
import '../scss/main.scss'
// import { FaDribbble } from "react-icons/fa";
import { header } from './Data'
import video from '../Videos/bg.mp4'


const Header = ({ open, children }) => {


    const burger = useRef();
    const limit = useRef();
    const update = () => {

        (window.pageYOffset > limit.current.offsetHeight
            ? burger.current.classList.add('fixed')
            : burger.current.classList.remove('fixed')
        )


    }
    window.onscroll = update;
    window.onresize = update;
    return (
        <header ref={limit}>
            <div className="header-container wrapper">
                <div ref={burger} className={open ? "hamburger-container open" : "hamburger-container" }>
                    {children}
                </div>
                <div className="text-container">

                    <div className="top-container">
                        <h1 className="home-title">
                            {header[0].title}
                        </h1>
                    </div>

                    <div className="bottom-container">
                        <div className="avatar-container">
                            <div className="bg-image" id="me"></div>
                        </div>
                        <p>Last Updated:<br />{header[0].updated}</p>
                    </div>

                </div>

            </div>

            <div className="headerbg-container">
                <div className="header-video-container">
                    <video className="video-content" autoPlay playsInline muted loop id="header-video">
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                {/* <a href="https://dribbble.com/shots/15886164-Voice-morphing-interface-Natural" rel="noopener noreferrer" target="_blank" className="source dribbble"><FaDribbble />Voice Morphing Interface by Gleb Kuznetsov</a> */}
            </div>
        </header>
    )
}

export default Header
