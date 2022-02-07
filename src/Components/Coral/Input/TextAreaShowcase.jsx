import React from 'react'
import { useState, useEffect } from 'react';
import { ContentContainer, SegmentContainer, DemoContainer } from '../Containers'
import FigmaLink from '../FigmaLink';
import faker from 'faker'
import Field from '@seaweb/coral/components/Field';
import TextArea, { TextAreaCharCount } from '@seaweb/coral/components/TextArea';

const TextAreaShowcase = () => {

  const [label, setLabel] = useState('Default Textarea')
  const [helper, setHelper] = useState('')
  const [allowResize, setAllowResize] = useState(false)
  const [resize, setResize] = useState('fixed')
  const [invalid, setInvalid] = useState(false)
  const [min, setMin] = useState(6)
  const [max, setMax] = useState(6)
  const [text, setText] = useState(faker.hacker.phrase())
  const [count, setCount] = useState(100)
  const [fullWidth, setFullwidth] = useState(true)

  useEffect(() => {
    switch (resize) {
      default:
      case 'fixed':
        setAllowResize(false)
        setFullwidth(true)
        setMin(6)
        setMax(6)
        break
      case 'auto':
        setAllowResize(false)
        setFullwidth(true)
        setMin(1)
        setMax(null)
        break
      case 'vertical':
        setAllowResize(true)
        setFullwidth(true)
        setMin(1)
        setMax(6)
        break
      case 'horizontal':
        setAllowResize(true)
        setMin(1)
        setMax(6)
        setFullwidth(false)
        break
      case 'both':
        setAllowResize(true)
        setMin(1)
        setMax(6)
        setFullwidth(false)
    }
  }, [resize])

  useEffect(() => {
    if (count > 0 && text.length > count) {
      setInvalid(true)
    }
    else if (count < 1) {
      setHelper('')
    }
    else
      setInvalid(false)
    setHelper(text.length - count > 0 ? `Exceed character limit by ${text.length - count}` : '')

  }, [count, text])


  return (
    <ContentContainer>
      <p>Text areas are bigger text box allow user to enter and edit long text. </p>
      <SegmentContainer>
        <h3>Interactive Demo</h3>
        <DemoContainer>
          <div className="gridcenter">
            <div className="container wide-mobile-small-desktop">
              <Field label={label} message={helper} invalid={invalid}>
                <TextArea
                  value={text}
                  minRows={min}
                  maxRows={max}
                  fullWidth={fullWidth}
                  style={{ resize: allowResize ? resize : null }}
                  placeholder={`minRows: ${min} ${max !== null ? `, maxRows:${max}` : ''}`}
                  onChange={(e) => setText(e.target.value)}
                  bottomElement={count > 0 ? <TextAreaCharCount outOf={count} /> : ''}
                />
              </Field>
            </div>
          </div>
        </DemoContainer>
      </SegmentContainer>
      <SegmentContainer>
        <div className="flex-container label-container" style={{ gap: '2rem' }}>
          <div className="container" style={{ flex: 1 }} >
            <p>Label</p>
            <input value={label} onChange={e => setLabel(e.target.value)} type="text" name="label" id="" />
          </div>
          <div className="container" style={{ flex: 1 }} >
            <p>Helper Text</p>
            <input value={helper} onChange={e => setHelper(e.target.value)} type="text" name="helpertext" id="" />
          </div>
        </div>
        <div className="flex-container wrap label-container" style={{ gap: '2rem' }}>
          <div className="container">
            <p>Auto Resize</p>
            <div className="group flex-container" style={{ gap: '1rem' }}>
              {['fixed', 'auto', 'vertical', 'horizontal', 'both'].map((option, i) => (
                <span key={`resize${i}`}>
                  <input checked={resize === option ? true : false} onChange={() => setResize(option)} type="radio" name="resize" id={option} />
                  <label htmlFor={option} style={{ textTransform: 'capitalize' }}>{option}</label>
                </span>
              ))}
            </div>
          </div>
          <div className="container">
            <p>Invalid</p>
            <input checked={invalid} onChange={() => setInvalid(prev => !prev)} type="checkbox" name="invalid" id="invalid" />
            <label htmlFor="invalid">{invalid ? "Yes" : "No"}</label>
          </div>
          <div className="container">
            <p>Character Count Limit</p>
            <input value={count} onChange={e => setCount(e.target.value)} type="number" name="char" id="" />
          </div>
        </div>
      </SegmentContainer>
      <FigmaLink url="https://www.figma.com/file/IIQVKRzvcftx14GfAooG5N/?node-id=757%3A19840" />
      <hr />
    </ContentContainer>
  )
}

export default TextAreaShowcase
