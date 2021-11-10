import React from 'react'
import { content } from './Data';

const Content = () => {


    return (

        <main>

            {content.map((heading, i) => (
                <section key={i} id={heading.anchor}>
                    <h2>{heading.topic}</h2>
                    <ul className="subtopic-container">
                        {heading.subtopics.map((subtopic, i) => (
                            <li key={i} id={subtopic.anchor}>
                                <h3>{subtopic.title}</h3>
                                {subtopic.images !== undefined &&
                                    <ul className="image-container">
                                        {subtopic.images.map((image, i) => (
                                            <li key={i}>
                                                <div className="image" style={
                                                    {
                                                        backgroundImage: `url(./motion/${image.url})`
                                                    }
                                                }>
                                                </div>
                                                {image.caption !== undefined &&
                                                <sub className="caption">{image.caption}</sub>
                                                }
                                            </li>
                                        ))}
                                    </ul>
                                }
                                {subtopic.videos !== undefined &&
                                    <ul className="video-container">
                                        {subtopic.videos.map((video, i) => (
                                            <li className="video" key={i}>
                                                <video autoPlay playsInline muted loop className="video-content">
                                                    <source src={`./motion/${video.url}`} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                                {video.caption !== undefined &&
                                                <sub className="caption">{video.caption}</sub>
                                                }
                                            </li>

                                        ))}
                                    </ul>
                                }

                                <p>{subtopic.description}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </main>
    )
}

export default Content
