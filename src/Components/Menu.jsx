import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Menu = () => {
    const pathname = useLocation().pathname;
    const [hamburger, setHamburger] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const toggleDark = (pathname) => {
        switch (pathname) {
            case "/glassmorphism":
            case "/neumorphism":
            case "/monochromatic":
            case "/brutalist":
                setIsDark(true)
                break;
            default:
                setIsDark(false)
                break;
        }
    }
    const update = () => {
        toggleDark(pathname);
        setHamburger(false);
        const active = document.querySelector('.style.active')
        if (active !== null) {
            setActiveLeft(active.offsetLeft)
            setActiveWidth(active.clientWidth)
        }
    }
    
    const styles = [
        {
            name: "No CSS",
            link: "/no-css",
        },
        {
            name: "Flat Design",
            link: '/flat-design'
        },
        {
            name: "Glassmorphism",
            link: '/glassmorphism'
        },
        {
            name: "Neumorphism",
            link: '/neumorphism'
        },
        {
            name: "Monochromatic",
            link: '/monochromatic'
        },
        {
            name: "Brutalist",
            link: '/brutalist'
        },
        {
            name: "3D Everything",
            link: '/threed'
        },
    ];

    const [activeLeft, setActiveLeft] = useState(0);
    const [activeWidth, setActiveWidth] = useState(0);

    window.onresize = update;

    useEffect(()=> {
        toggleDark(pathname);
        const active = document.querySelector('.style.active')
        if (active !== null) {
            setActiveLeft(active.offsetLeft)
            setActiveWidth(active.clientWidth)
        }
    }, [pathname])

    return (
        <nav className={isDark ? "menubar white" : "menubar"}>
            <div className="container">
                <div onClick={() => setHamburger(prev => !prev)} className={hamburger === true ? "hamburger-container open" : "hamburger-container"}>
                    <span className="top"></span>
                    <span className="middle"></span>
                    <span className="bottom"></span>
                </div>
                <div className="menu-container">
                    <span className="underline" style={
                        {
                            width: activeWidth,
                            left: activeLeft

                        }
                    }></span>
                    <ul className={hamburger === true ? "menu open" : "menu"}>
                        {styles.map((style, i) => (
                            <Link onClick={() => setHamburger(prev => !prev)} key={i} to={style.link}>
                                <li className={pathname === style.link ? "style active" : "style"}>
                                    <h4 id={style.link.substring(1) + "-button"} className="menu">{style.name}</h4>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Menu
