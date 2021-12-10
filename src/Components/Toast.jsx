import React from "react";
import { useEffect, useRef } from "react";
import {useSpring, animated } from 'react-spring'

const Toast = ({ message, id, duration, update }) => {

    const toasty = useRef()
    const [entry, api] = useSpring(()=> ({ opacity: 0, y: -10, config: { tension: 200 } }))

    useEffect(()=> {
        api.start({ opacity: 1, y: 0 })
        setTimeout(()=> {
            api.start({ opacity: 0 })
        }, duration - 300)
    })

    useEffect(()=> {
        const height = toasty.current.offsetHeight
        update(id, duration, height)
    })

    return (
        <animated.div ref={toasty} style={entry} id={id}>
            {message}
        </animated.div>
    );
};

export default Toast;