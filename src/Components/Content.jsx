import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";


const Content = ({ topicId, data, onclick }) => {

    let content = Array(data[topicId])

    return (
        <div className="content-container">
            {content.map((heading, i) => (
                <section className="section-container" key={i} id={heading.anchor}>
                    <h2>{heading.topic}</h2>
                    <ul className="subsection-container">
                        {heading.subtopics.map((subtopic, i) => (
                            <li key={i} >
                                <div className="top-container">

                                    {subtopic.link !== undefined
                                        ? <h3 className="subtopics link" onClick={() => window.open(subtopic.link)} id={subtopic.anchor}>{subtopic.title}</h3>
                                        : <h3 className="subtopics" id={subtopic.anchor}>{subtopic.title}</h3>
                                    }

                                    {subtopic.images !== undefined &&
                                        <ul className="image-container" id={`${subtopic.anchor}-images`}>
                                            {subtopic.images.map((image, i) => (
                                                <li key={i}>
                                                    <Zoom zoomMargin={128}>
                                                        <img key={image.url} className="image" media="(max-width: 300px)" height="224px" src={`${image.url}`} alt="" />
                                                    </Zoom>
                                                    {image.caption !== undefined &&
                                                        <figcaption className="caption">{image.caption}</figcaption>
                                                    }
                                                </li>
                                            ))}
                                        </ul>
                                    }
                                    {subtopic.videos !== undefined &&
                                        <ul className="video-container" id={`${subtopic.anchor}-videos`}>
                                            {subtopic.videos.map((video, i) => (
                                                <li className="video" key={i}>
                                                    <Zoom zoomMargin={128}>
                                                        <video key={video.url} autoPlay playsInline muted loop className="video-content">
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
                                <div className="credit" key={i}>
                                    <span>Read more:</span> <a href={credit.url} rel="noreferrer noopener" target="_blnk" ><h4>{credit.title}</h4></a>
                                </div>
                            ))}
                        </div>
                    }

                </section>
            ))}
            <section>
                <div className="section-container more-container">
                    {(topicId - 1) >= 0 && Array(data[topicId - 1]).map((content, i) => (
                        <PrevNextContainer key={i} direction={'prev'} click={onclick} anchor={content.anchor} image={content.image !== undefined ? content.image : ''} title={content.topic} paragraph={content.subtopics[0].description} topic={(topicId - 1) < 0 ? 0 : (topicId - 1)} />
                    ))
                    }
                    {(topicId + 1) < data.length && Array(data[topicId + 1]).map((content, i) => (
                        <PrevNextContainer key={i} direction={'next'} click={onclick} anchor={content.anchor} image={content.image !== undefined ? content.image : ''} title={content.topic} paragraph={content.subtopics[0].description} topic={(topicId + 1) < data.length ? (topicId + 1) : 0} />
                    ))
                    }
                </div>
            </section>
        </div>
    )
}


const PrevNextContainer = ({ direction, click, anchor, topic, image, title, paragraph }) => {
    return (
        <div className={direction === 'next' ? "next-container prevnext-container " : "prev-container prevnext-container "}>
            <div className="nextprev-content" >
                <div className="title-container" onClick={click} topic={topic}>
                    {direction === 'next' ? <MdArrowForwardIos /> : <MdArrowBackIosNew />} <h3>{direction === 'next' ? "Next Up" : "Previous"}</h3>
                </div>
                <h2>{title}</h2>
                <div anchor={anchor} className="image-container" onClick={click} topic={topic}>
                    <img key={image} src={image} className="image" alt="" />
                </div>
                {/* <p className="description">{paragraph}</p> */}
            </div>
        </div>
    )
}


export default Content
