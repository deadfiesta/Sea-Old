import React from 'react'
import { useEffect } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
// import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";


const Content = ({ topicId, data, onclick }) => {

    let content = Array(data[topicId]);

    // const [prevContent, setPrevContent] = useState(false)
    // const [nextContent, setNextContent] = useState(false)

    // const [prevId, setPrevId] = useState(0)
    // const [nextId, setNextId] = useState(0)

    // useEffect(()=> {

    //     setPrevId(topicId - 1 )
    //     setNextId(topicId + 1)

    //     if (prevId >= 0) { setPrevContent(Array(data[prevId])) } else { setPrevContent(false) }
    //     if (nextId < data.length) { setNextContent(Array(data[nextId])) } else { setNextContent(false) }

    // }, [topicId, data, nextId, prevId])






    useEffect(() => {
        const images = document.querySelectorAll('.image-container, .video-container');

        let options = {
            root: null,
            threshold: .5,
        }

        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                let box = document.getElementById(entry.target.id);
                if (box !== null) {
                    entry.isIntersecting
                        ? box.childNodes.forEach(b => b.classList.remove('hidden'))
                        : box.childNodes.forEach(b => b.classList.add('hidden'))
                }

            })
        }, options)

        images.forEach(el => {
            observer.observe(el)
        })

    })

    return (
        <main>
            {content.map((heading, i) => (
                <section className="section-container" key={i} id={heading.anchor}>
                    <h2>{heading.topic}</h2>
                    <ul className="subtopic-container">
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
                        {/* <div className="end-container flex middle">
                            {console.log(prevContent)}
                            {prevContent
                                && prevContent.map((content, i) => (
                                    <PrevNextContainer key={i} direction={'prev'} click={onclick} anchor={content.anchor} image={content.image !== undefined ? content.image : ''} title={content.topic} paragraph={content.subtopics[0].description} topic={prevId} />
                                ))
                            }
                        </div> */}

                </section>
            ))}



        </main>
    )
}


// const PrevNextContainer = ({ direction, click, anchor, topic, image, title, paragraph }) => {
//     return (
//         <div topic={topic} onClick={click} className="prevnext-container">
//             <div className="title-container">
//                 {direction === 'next' ? <MdArrowForwardIos /> : <MdArrowBackIosNew />} <h3>Previous</h3>
//             </div>
//             <div anchor={anchor} className="image-container">
//                 <img key={image} src={image} className="image" alt="" />
//             </div>
//             <h2>{title}</h2>
//             <p>{paragraph}</p>
//         </div>
//     )
// }


export default Content
