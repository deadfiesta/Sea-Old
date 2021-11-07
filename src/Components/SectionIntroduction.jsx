import React from 'react'
import Arrow from './Arrow';

const SectionIntroduction = ({ data }) => {
    const introduction = data[1].introduction[0];
    return (
        <section className="introduction">
            <div className="container">
                <div className="title-container">
                    <h2>{introduction.title}</h2>
                </div>
                <div className="paragraph-container">
                    <p>{introduction.paragraph}</p>
                    <p>{introduction.more}</p>
                </div>
                <a target="_blank" href={introduction.link} rel="noreferrer" className="link">
                    <button className="inline">
                        <h4>{introduction.article}</h4><Arrow />
                    </button>
                </a>
            </div>
        </section>
    )
}

export default SectionIntroduction
