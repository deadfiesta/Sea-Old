import React from 'react'
import Arrow from './Arrow';

const SectionExamples = ({ data }) => {
    const images = data[1].images;
    return (
        <section className="examples">
            <div className="container">
                <ul className="images-container">
                    {images.map((image, i) => (
                        <li key={i}>
                            <a className="web-image" href={image.link} rel="noreferrer" target="_blank">
                                <div className="bg-container" style={
                                    {
                                        backgroundImage: `url(${image.url})`
                                    }
                                }>
                                </div>
                                <div className="example-container">
                                    <button className="inline">
                                        <h4>{image.name}</h4><Arrow />
                                    </button>
                                </div>
                            </a>
                        </li>
                    ))}

                </ul>
            </div>
        </section>
    )
}

export default SectionExamples
