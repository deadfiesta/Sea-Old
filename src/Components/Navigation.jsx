import React from 'react'
import { useEffect } from 'react'
import { nav } from './Data'

const Navigation = ({ open }) => {


    useEffect(()=> {
        const anchors = document.querySelectorAll('ul.subtopic-container li span');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', (ev) => {
                let an = document.getElementById(anchor.className)
                an.scrollIntoView(
                    {
                     behavior: 'smooth',
                     block: 'center',   
                    }
                )
            })
        })
    })

    useEffect(() => {
        const scrolling = () => {
            const navy = document.querySelector('nav');
            if (window.scrollY > navy.offsetTop) {
                navy.childNodes[0].classList.add('pinned');
            } else {
                navy.childNodes[0].classList.remove('pinned')
            }
        }
        window.onscroll = scrolling;
    })

    useEffect(() => {
        const alltopics = document.querySelectorAll('.subtopics')

        let options = {
            root: null,
            threshold: 1,
            rootMargin: "-250px 0px"
        }
        let observer = new IntersectionObserver((entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelector(`.${entry.target.id}`).classList.add('selected')
                } else {
                    document.querySelector(`.${entry.target.id}`).classList.remove('selected')
                }
            })
        }), options)

        alltopics.forEach(topic => {
            observer.observe(topic)
        })

    })

    return (

        <nav className={open ? "open" : null}>
            <div className="nav-container">
                <div className="title-container">
                    <h2>Content</h2>
                </div>
                <div className="wrapper">

                    <div className="line-container">
                        <span className="line" style={
                            {
                                top: 0,
                                height: 0,
                            }
                        }></span>
                    </div>
                    <ul className="menu-container">
                        {nav.map((menu, i) => (
                            <li key={i}>
                                <h3>{menu.topic}</h3>
                                <ul className="subtopic-container">
                                    {menu.subtopics.map((submenu, i) => (
                                        <li key={i} className={submenu.anchor}>
                                            <span className={submenu.anchor}>
                                                {submenu.title}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Navigation
