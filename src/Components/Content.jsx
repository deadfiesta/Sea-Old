import React from 'react'
import { content } from './Data';

const Content = () => {

    return (
        <main>
            {console.log(content)}
            {content.map((heading, i) => (
                <section key={i} id={heading.anchor}>
                    <h2>{heading.topic}</h2>
                    <ul className="subtopic-container">
                        {heading.subtopics.map((subtopic, i) => (
                            <li key={i}>
                                <h3>{subtopic.title}</h3>
                                {subtopic.images !== undefined &&
                                    <ul className="image-container">
                                        {subtopic.images.map((image, i) => (
                                            <li className="image" style={{ backgroundImage : `url(${image.url})` }} key={i} />
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
