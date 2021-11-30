import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import Nav from './Nav'
import Scrium from './Scrium'
import PricingPage from './PricingPage'

const AppRouter = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <Router basename="/homeguru">
        <Routes>
          <Route path="/" element={<MainContent open={isOpen} setOpen={()=>setOpen(prev => !prev)} />}>
            <Route path="/" element={<PricingPage />} />
            <Route path="/about" element={<PricingPage />} />
            <Route path="/how" element={<PricingPage />} />
            <Route path="/faq" element={<PricingPage />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

const MainContent = ({ open, setOpen }) => {
  return (
    <>
      <Nav open={open} setOpen={setOpen} />
      {open && <Scrium setOpen={setOpen} />}
      <Outlet />
    </>
  )
}


export default AppRouter
