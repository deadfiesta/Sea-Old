import React from 'react'
import { useState, useEffect } from 'react'
import SectionTitle from './SectionTitle'
import { MdTaskAlt, MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

const SectionPlans = () => {

  const [toggle, setToggle] = useState(true)

  const data = {
    title: "Find a Plan for Your Home",
    subtitle: "Quality service for quality customers.",
    plans: [
      {
        type: "HDB",
        rooms: "Up to 2 rooms",
        annualrate: "$90",
        monthlyrate: "$95",
        note: "Billed at $1080 per year",
      },
      {
        type: "HDB",
        rooms: "3 rooms",
        annualrate: "$110",
        monthlyrate: "$115",
        note: "Billed at $1320 per year",
      },
      {
        type: "HDB",
        rooms: "4 rooms",
        annualrate: "$120",
        monthlyrate: "$125",
        note: "Billed at $1440 per year",
      },
      {
        type: "HDB",
        rooms: "5 rooms and above",
        annualrate: "$130",
        monthlyrate: "$135",
        note: "Billed at $1560 per year",
      },
      {
        type: "Private Property",
        annualrate: "$180",
        monthlyrate: "$185",
        note: "Billed at $2160 per year",
      }
    ],
    footer: "All price plans are to include the following services below",
  }

  const Toggle = ({ toggle, onchange }) => {

    useEffect(() => {
      document.getElementById('toggle').addEventListener('click', (e) => {
        e.preventDefault();
        console.log('yup')
      })
    })

    return (
      <div className="toggle-container">
        <div className="rate-container"><span id="monthly" className={toggle ? "rate-type" : "toggled rate-type"}>Bill Monthly</span></div>
        <div className="toggle-wrapper">
          <input type="checkbox" id="toggle" name="toggling" onChange={onchange} checked={toggle} />
          <label htmlFor="toggle" />
        </div>
        <div className="rate-container"><span id="annually" className={toggle ? "toggled rate-type" : "rate-type"}>Bill Annually</span></div>
      </div>
    )
  }

  const Plans = () => {
    return (
      <ul className="plans-container">
        {data.plans.map((plan, i) => (
          <li className={toggle ? `plan annual ${plan.type.replace(/\s+/g, '').toLowerCase()}` : `plan ${plan.type.replace(/\s+/g, '').toLowerCase()}`} key={i}>
            <div className="type-container">
              <span className="type">{plan.type}</span>
              {plan.rooms !== undefined && <span className="room">{plan.rooms}</span>}
            </div>

            <div className="price-container">
              {toggle && <div className="label-container"><span className="label"><MdTaskAlt /> Save $60</span></div>}
              <div className="price-info">
                <div className="price"><span className="big-number">{toggle ? plan.annualrate : plan.monthlyrate}</span><span className="per-month">/ month</span></div>
                <div className={toggle ? "annual notes" : "notes"}><span className={toggle ? "un em" : "em"}>{toggle ? plan.note : `${plan.annualrate} per month`}</span><span className={toggle ? "hide if-annual" : "if-annual"}> if billed annually</span></div>
              </div>
            </div>

            <div className="choose-container">
              <button className="choose-plan"><span>Choose Plan</span><MdKeyboardArrowRight /></button>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  const BottomNotes = () => {


    return (
      <div className="bottom-container" onClick={()=>document.getElementById('general-maintenance').scrollIntoView({block: "center"})}>
        <p>{data.footer}</p>
        <MdKeyboardArrowDown />
      </div>
    )
  }

  return (
    <section id="plans">
      <div className="wrapper">
        <SectionTitle title={data.title} subtitle={data.subtitle} />
        <Toggle toggle={toggle} onchange={() => setToggle(prev => !prev)} />
        <Plans />
        <BottomNotes />
      </div>
    </section>
  )
}

export default SectionPlans
