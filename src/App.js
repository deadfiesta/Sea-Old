import { useState, useRef, useEffect } from "react";
import { animated, useSpring } from 'react-spring'
import Toast from "./Components/Toast";

function App() {
  const [toasts, setToasts] = useState([]);
  const [message, setMessage] = useState("")
  const count = useRef(0)
  const container = useRef()
  const [move, api] = useSpring(() => ({ y: 0 }))

  const updateToast = (id, duration, height) => {
    setTimeout(() => {
      let go = document.getElementById(id)
      if (go !== null) {
        api.start({ y: container.current.offsetHeight - height, config: {duration: 0} })
        go.remove()
      }
    }, duration);
  };

  const pushToast = () => {
    let id = count.current;
    count.current++;

    const duration = (length) => {
      let cal = length * 150;
      if (cal < 3500) return 3500;
      else if (cal > 10000) return 10000;
      else return cal;
    };

    setToasts([
      ...toasts,
      <Toast key={id} id={`t${id}`} message={message} duration={duration(message.length)} update={updateToast} />
    ])
  }

  useEffect(() => {
    api.start({ y: container.current.offsetHeight, config: { tension: 170, friction: 26 } })
  }, [toasts])

  return (
    <div className="App">
      <h1>hello</h1>
      <label htmlFor="toast-message" name="toast"></label>
      <input
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Enter your message"
        name="toast"
        id="toast-message"
      />
      <button onClick={pushToast}>push</button>
      <div className="toast-wrapper">
        <animated.div style={move} ref={container} className="toast-container" >
          {toasts}
        </animated.div>
      </div>
    </div>
  );
}

export default App;
