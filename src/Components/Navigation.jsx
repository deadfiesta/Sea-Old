import React from 'react'
import { useEffect, useState } from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";

const Navigation = ({ onclick, highlight, data, open }) => {

    let nav = data;

    useEffect(()=> {
        let li = document.querySelectorAll('.menu')
        li.forEach(l => l.classList.remove('active'))
        li[highlight].classList.add('active')

        let h3 = document.querySelectorAll('.menu-header')
        h3.forEach(h => h.classList.remove('active'))
        h3[highlight].classList.add('active')
    }, [highlight])

    useEffect(() => {
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

          window.addEventListener("scroll", scrolling)
    })

    // useEffect(() => {

    //     const isInViewport = (element) => {
    //         const rect = element.getBoundingClientRect();
    //         return (
    //             rect.top >= 0 &&
    //             rect.left >= 0 &&
    //             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //             rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    //         )
    //     }

    //     const alltopics = document.querySelectorAll('.subtopics')

    //     let options = {
    //         root: null,
    //         threshold: 1,
    //         // rootMargin: "-250px 0px"
    //     }
    //     let observer = new IntersectionObserver((entries => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 let selected = document.querySelector(`.${entry.target.id}`)
    //                 if (selected !== null) {
    //                     selected.classList.add('selected')
    //                     // !isInViewport(selected) && selected.scrollIntoView();
    //                 }


    //             } else {
    //                 let selected = document.querySelector(`.${entry.target.id}`)
    //                 selected !== null && selected.classList.remove('selected')
    //             }
    //         })
    //     }), options)

    //     alltopics.forEach(topic => {
    //         observer.observe(topic)
    //     })

    // })

    const [top, setTop] = useState(0);
    const [height, setHeight] = useState(0);

    useEffect(()=> {
        let selected = document.querySelector('.menu-header.active');
        setTop(
            selected.offsetTop - document.querySelector('.menu-container').offsetTop
        )
        setHeight(
            selected.clientHeight
        )
    }, [highlight])

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
                                top: top,
                                height: `${height}px`,
                            }
                        }></span>
                    </div>
                    <ul className="menu-container">
                        {nav.map((menu, i) => (
                            <li key={i} topic={i} onClick={onclick} className="menu">
                                <div className="menu-header flex-container middle between">
                                    <h3>{menu.topic}</h3>
                                    <MdKeyboardArrowDown />
                                </div>
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
