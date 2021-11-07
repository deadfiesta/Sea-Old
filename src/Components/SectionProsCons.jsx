import React from 'react'
import Arrow from './Arrow';
import { useLocation } from 'react-router';

const SectionProsCons = ({ data }) => {
    const pathname = useLocation().pathname.substring(1);
    const pros = data[1].pros;
    const cons = data[1].cons;
    const links = data[1].links;
    let emoji = 128512;
    let sadmoji = 128549;
    switch (pathname) {
        case 'glassmorphism':
            emoji = 128521;
            sadmoji = 128550;
            break;
        case 'neumorphism':
            emoji = 128521;
            sadmoji = 128557;
            break;
        case 'monochromatic':
            sadmoji = 128558;
            break;
        case 'threed':
            sadmoji = 128560;
            break;
        default:
            emoji = 128512;
            sadmoji = 128549;
    }

    return (
        <section className="procon">
            <div className="pro-container">
                <div className="container">
                    <div className="title-container">
                        <h2><span className="emoji">&#128526;</span> The Pros</h2>
                    </div>
                    <ul className="pro-list">
                        {pros.map((pro, i) => (
                            <li key={i}>
                                <div className="title-container">
                                    <h3>{pro.title}</h3>
                                </div>
                                <div className="paragraph-container">
                                    <p>
                                        {pro.paragraph}
                                    </p>
                                </div>
                                <div className="emoji-container">
                                    <span className="emoji">{String.fromCodePoint(emoji + i)}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="con-container">
                <div className="container">
                    <div className="title-container">
                        <h2><span className="emoji">&#128545;</span> The Cons</h2>
                    </div>
                    <ul className="con-list">
                        {cons.map((con, i) => (
                            <li key={i}>
                                <div className="title-container">
                                    <h3>{con.title}</h3>
                                </div>
                                <div className="paragraph-container">
                                    <p>{con.paragraph}</p>
                                </div>
                                <div className="emoji-container">
                                    <span className="emoji">{String.fromCodePoint(sadmoji + i)}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="container">
                <a href={links[1].link} target="_blank" rel="noreferrer">
                    <button className="inline">
                        <h4>{links[1].title}</h4><Arrow />
                    </button>
                </a>
            </div>
        </section>
    )
}

export default SectionProsCons
