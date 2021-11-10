import React from 'react'
import { content } from './Data'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Content = () => {


    return (

        <main>

            {content.map((heading, i) => (
                <section key={i} id={heading.anchor}>
                    <h2>{heading.topic}</h2>
                    <ul className="subtopic-container">
                        {heading.subtopics.map((subtopic, i) => (
                            <li key={i} id={subtopic.anchor}>
                                <div className="top-container">

                                    <h3>{subtopic.title}</h3>
                                    {subtopic.images !== undefined &&
                                        <ul className="image-container">
                                            {subtopic.images.map((image, i) => (
                                                <li key={i}>
                                                    <Zoom zoomMargin={96}>
                                                        <img className="image" media="(max-width: 300px)" height="224px" src={`${image.url}`} alt={image.url} />
                                                        {/* <div className="image" style={
                                                            {
                                                                backgroundImage: `url(./motion/${image.url})`
                                                            }
                                                        }>
                                                        </div> */}
                                                    </Zoom>
                                                    {image.caption !== undefined &&
                                                        <figcaption className="caption">{image.caption}</figcaption>
                                                    }
                                                </li>
                                            ))}
                                        </ul>
                                    }
                                    {subtopic.videos !== undefined &&
                                        <ul className="video-container">
                                            {subtopic.videos.map((video, i) => (
                                                <li className="video" key={i}>
                                                    <Zoom zoomMargin={96}>
                                                        <video autoPlay playsInline muted loop className="video-content">
                                                            <source src={`${video.url}`} type="video/mp4" />
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    </Zoom>
                                                    {video.caption !== undefined &&
                                                        <figcaption className="caption">{video.caption}</figcaption>
                                                    }
                                                </li>

                                            ))}
                                        </ul>
                                    }


                                </div>

                                <div className="bottom-container">
                                    <p>{subtopic.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {heading.credits !== undefined &&
                        <div className="credit-container">
                            {heading.credits.map((credit, i) => (
                                <span key={i}>
                                    Read more: <h4>{credit.title}</h4>
                                </span>
                            ))}
                        </div>
                    }
                </section>
            ))}
        </main>
    )
}

export default Content
