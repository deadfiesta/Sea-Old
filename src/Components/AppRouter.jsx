import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import Header from './Header'
import Navigation from './Navigation'
import { Spin as Hamburger } from 'hamburger-react'
import Scrium from './Scrium'
import Content from './Content'

const AppRouter = () => {

    const [isOpen, setOpen] = useState(false)
    const closeMenu = () => {
        setOpen(false)
    }
    return (
        <>
            <Router basename="/motion">
                <Header open={isOpen}>
                    <Hamburger toggled={isOpen} toggle={setOpen} direction="right" />
                </Header>
                <div className="content">
                    <Navigation open={isOpen} />
                    {isOpen && <Scrium click={closeMenu} />}
                    <Content />
                </div>
            </Router>
        </>
    )
}

export default AppRouter
