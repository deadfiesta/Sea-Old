import React from 'react'
import { useState } from 'react'

const TextArea = ({ name, invalid, resize, maxRows, maxCols }) => {

  const [textHeight, setTextHeight] = useState(20)
  const [textContent, setTextContent] = useState('')

  const changeFunction = (e) => {
    setTextHeight(20)
    setTextContent(e.target.value)
    if (maxRows === null) {
      setTextHeight(e.target.scrollHeight)
    }
  }

  return (
    <div className='coral textarea-container' style={{ resize: resize }} >
      <textarea value={textContent} onChange={changeFunction} cols={maxCols} name={name} style={maxRows === null ? { height: textHeight } : null} rows={maxRows === null ? null : maxRows}>{textContent}</textarea>
    </div>
  )
}

export default TextArea

TextArea.defaultProps = {
  maxCols: null,
  maxRows: 1,
}
