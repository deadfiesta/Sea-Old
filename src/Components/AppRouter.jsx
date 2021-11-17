import React from 'react'
import '../scss/main.scss'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import ContentLayout from './ContentLayout'
import { Spin as Hamburger } from 'hamburger-react'


const AppRouter = () => {

    const [isOpen, setOpen] = useState(false)
    const closeMenu = () => {
        setOpen(false)
    }

    const scrolling = () => {
        const navy = document.querySelector('nav');
        if (window.scrollY > navy.offsetTop) {
          navy.childNodes[0].classList.add('pinned');
        } else {
          navy.childNodes[0].classList.remove('pinned')
        }
      }

      window.addEventListener("scroll", scrolling)

    return (
        <>
            <Router>
                <Header open={isOpen}>
                    <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
                </Header>
                <Routes>
                    <Route path="/" element={<ContentContainer />}>
                        <Route path="/" element={<ContentLayout open={isOpen} close={closeMenu} />} />
                        <Route path="/coral" element={<ContentLayout open={isOpen} close={closeMenu} />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

const ContentContainer = () => {
    return (
        <div className="content">
            <Outlet />
        </div>
    )
}

export default AppRouter
