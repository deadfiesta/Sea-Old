import React from 'react'
import Arrow from './Arrow';

const SectionCharacteristics = ({ data }) => {
    const title = data[0].title;
    const subtitle = data[0].subtitle;
    const styles = data[0].traits;
    const link = data[1].links[2];
    return (
        <section className="traits">
            <div className="container">
                <div className="title-container">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
                <ul className="traits-container">
                    {styles.map((style, i) => (
                        <li key={i}>
                            <div className="title-container">
                                <h3>{style.trait}</h3>
                            </div>
                            <div className="paragraph-container">
                                <p>{style.paragraph}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                {link !== undefined
                    &&
                    <a target="_blank" href={link.link} rel="noreferrer" className="link">
                        <button className="inline">
                            <h4>{link.title}</h4><Arrow />
                        </button>
                    </a>
                }
            </div>
        </section>
    )
}

export default SectionCharacteristics
