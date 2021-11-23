import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';
import '../scss/main.scss'
import { content } from './DataAll'


const Header = ({ open, children }) => {

    const pathname = useLocation().pathname;

    const contentData = content[0];

    const [underlineWidth, setUnderlineWidth] = useState(0)
    const [underlineX, setUnderlineX] = useState(0);

    const burger = useRef();
    const limit = useRef();
    const update = () => {

        (window.pageYOffset > limit.current.offsetHeight
            ? burger.current.classList.add('fixed')
            : burger.current.classList.remove('fixed')
        )
        document.querySelectorAll('.tab').forEach((tab => {
            tab.classList.remove('active')
            tab.getAttribute('anchor') === pathname && tab.classList.add('active')
        }))

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

    let boxes = []

    for (let i=1; i<8; i++) {
        let box = i.toString()
        boxes.push(box)
    }

    return (
        <header ref={limit}>
            <div className="header-container">
                <div ref={burger} className={open ? "hamburger-container open" : "hamburger-container"}>
                    {children}
                </div>
                <div className="text-container">

                    <div className="top-container wrapper">
                        <h1 className="home-title">
                            {contentData.header[0].title}
                        </h1>
                    </div>

                    <div className="bottom-container wrapper">
                        <div className="avatar-container">
                            <div className="bg-image" id="me"></div>
                        </div>
                        <p>Last Updated:<br />{contentData.header[0].updated}</p>
                    </div>

                    <div className="tabs-container wrapper">
                        <ul className="tabs">
                            {contentData.tabs.map((tab, i) => (
                                <li className="tab" anchor={tab.anchor} key={i} id={tab.id}>
                                    <Link to={tab.anchor}>
                                        {tab.title}
                                    </Link>
                                </li>
                            ))}
                           
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
                    {boxes.map((box, i) => (
                        <div className="box" key={i} id={`box${box}`} />
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Header
