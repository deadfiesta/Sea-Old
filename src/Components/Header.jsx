import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import '../scss/main.scss'
// import { FaDribbble } from "react-icons/fa";
import { header } from './DataAll'
// import video from '../Videos/bg.mp4'


const Header = ({ open, children }) => {

    const pathname = useLocation().pathname;

    const [underlineWidth, setUnderlineWidth] = useState(0)
    const [underlineX, setUnderlineX] = useState(0);


    const burger = useRef();
    const limit = useRef();
    const update = () => {

        (window.pageYOffset > limit.current.offsetHeight
            ? burger.current.classList.add('fixed')
            : burger.current.classList.remove('fixed')
        )

        document.querySelector('li.tab').classList.remove('active')
        switch (pathname) {
            case "/":
                document.getElementById('research').classList.add('active')
                break;
            case "/coral":
                document.getElementById('coral').classList.add('active');
                break;
            default:
                document.querySelector('li.tab').classList.remove('active')
                break;
        }

        setUnderlineWidth(
            document.querySelector('.active') !== null && document.querySelector('.active').clientWidth
        )
        setUnderlineX(
            document.querySelector('.active') !== null && document.querySelector('.active').offsetLeft
        )
    }

    useEffect(() => {
        update()
    })


    window.onscroll = update;
    window.onresize = update;
    return (
        <header ref={limit}>
            <div className="header-container">
                <div ref={burger} className={open ? "hamburger-container open" : "hamburger-container"}>
                    {children}
                </div>
                <div className="text-container">

                    <div className="top-container wrapper">
                        <h1 className="home-title">
                            {header[0].title}
                        </h1>
                    </div>

                    <div className="bottom-container wrapper">
                        <div className="avatar-container">
                            <div className="bg-image" id="me"></div>
                        </div>
                        <p>Last Updated:<br />{header[0].updated}</p>
                    </div>

                    <div className="tabs-container wrapper">
                        <ul className="tabs">
                            <li className="tab" id="research">
                                <Link to="/">
                                    Research
                                </Link>
                            </li>
                            <li className="tab" id="coral">
                                <Link to="/coral">
                                    Coral
                                </Link>
                            </li>
                            <span className="underline" style={
                                {
                                    left: underlineX,
                                    width: underlineWidth,
                                }
                            }></span>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="headerbg-container">
                <div className="header-video-container">
                    <div className="box" id="box1" />
                    <div className="box" id="box2" />
                    <div className="box" id="box3" />
                    <div className="box" id="box4" />
                    <div className="box" id="box5" />
                    {/* <video className="video-content" autoPlay playsInline muted loop id="header-video">
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                </div>
                {/* <a href="https://dribbble.com/shots/15886164-Voice-morphing-interface-Natural" rel="noopener noreferrer" target="_blank" className="source dribbble"><FaDribbble />Voice Morphing Interface by Gleb Kuznetsov</a> */}
            </div>
        </header>
    )
}

export default Header
