import React from 'react'
import { useState, useEffect } from 'react'
import { ContentContainer, DemoContainer, SegmentContainer } from '../Containers'
import TextField from './TextField'
import ToggleBtn from '../ToggleBtn'
import SearchIcon from '@seaweb/coral/icons/Search';
import UserIcon from '@seaweb/coral/icons/User';
import EyeOpenSlashIcon from '@seaweb/coral/icons/EyeOpenSlash';
import EyeOpenIcon from '@seaweb/coral/icons/EyeOpen';
import UnlockIcon from '@seaweb/coral/icons/Unlock';
import FigmaLink from '../FigmaLink'
import ShowCodeBtn from '../ShowCodeBtn'

const TextFieldShowcase = () => {
  const [type, setType] = useState('text')
  const [value, setValue] = useState('')
  const [validation, setValidation] = useState('')
  const [label, setLabel] = useState('Label')
  const [placeholder, setPlaceholder] = useState('Type your message here')
  const [helper, setHelper] = useState('This field will show info related')
  const [size, setSize] = useState('m')
  const [prefix, setPrefix] = useState('')
  const [prefixDivider, setPrefixDivider] = useState(false)
  const [suffix, setSuffix] = useState('')
  const [suffixDivider, setSuffixDivider] = useState(false)
  const [lead, setLead] = useState('')
  const [trail, setTrail] = useState('')
  const [eyeIcon, setEyeIcon] = useState(<EyeOpenSlashIcon />)
  const [visiblePw, setVisiblePw] = useState(false)
  const [prefixOpacity, setPrefixOpacity] = useState(false)
  const [suffixOpacity, setSuffixOpacity] = useState(false)
  const [showExtraControls, setShowExtraControls] = useState(false)

  const clear = () => {
    setValue('')
  }

  const trailClick = () => {
    setVisiblePw(prev => !prev)
  }

  const validations = [
    {
      type: 'Error',
      validation: 'required'
    },
    {
      type: 'Warning',
      validation: 'warning',
    },
    {
      type: 'Disabled',
      validation: 'disabled'
    }
  ]

  const changeValidation = (e) => {
    e.target.id === validation ? setValidation(false) : setValidation(e.target.id)
  }

  const changeSize = (e) => {
    let id = e.target.id
    id === size ? setSize(false) : setSize(id)
    if (id === 'xs') setPlaceholder('Enter')
    else setPlaceholder('Type your message here')
  }

  const changeLead = (e) => {
    let id = e.target.id
    id === lead ? setLead(false) : setLead(id)
  }

  const changeTrail = (e) => {
    let id = e.target.id
    id === trail ? setTrail(false) : setTrail(id)
    if (id === 'eye' && trail !== id) {
      setPlaceholder('Password')
      setLabel('Password')
      setLead('lock')
      setValidation('required')
      setHelper('Wrong password')
      setType('password')
    } else setType('text')
  }

  const changeVariant = (e) => {
    let id = e.target.id
    switch (id) {
      default:
      case 'default':
        setSize('m')
        setLead('')
        setTrail('')
        setValidation('')
        setSuffix('')
        setPrefix('')
        setPlaceholder('Please enter')
        setLabel('Label')
        setHelper('')
        break
      case 'left':
        setSize('m')
        setLead('')
        setTrail('')
        setValidation('')
        setSuffix('')
        setSuffixDivider(false)
        setPrefixOpacity(false)
        setPrefix('http://')
        setPrefixDivider(true)
        setPlaceholder('Please enter')
        setLabel('URL')
        break
      case 'right':
        setSize('m')
        setLead('')
        setTrail('')
        setValidation('')
        setSuffix('%')
        setSuffixDivider(true)
        setPrefixOpacity(false)
        setPrefix('')
        setSuffixOpacity(false)
        setPrefixDivider(true)
        setPlaceholder('Please enter')
        setLabel('')
        break
      case 'leftright':
        setSize('m')
        setLead('')
        setTrail('')
        setValidation('')
        setSuffix('Million')
        setSuffixOpacity(true)
        setSuffixDivider(false)
        setPrefixOpacity(false)
        setPrefix('USD')
        setPrefixDivider(true)
        setPlaceholder('Please enter')
        setLabel('')
        setHelper('')
        break
      case 'password':
        setTrail('eye')
        setEyeIcon(<EyeOpenSlashIcon />)
        setType('password')
        setSuffix('')
        setPrefix('')
        setLead('lock')
        setPlaceholder('Password')
        setVisiblePw(false)
        setLabel('Password')
        setValidation('required')
        setHelper('Wrong password')
        setSuffixOpacity(false)
        setPrefixOpacity(false)
        break
      case 'search':
        setTrail('')
        setLead('search')
        setType('text')
        setSuffix('')
        setPrefix('')
        setPlaceholder('Enter username')
        setValidation('')
        setHelper('')
        setSuffixOpacity(false)
        setSuffixDivider(false)
        setPrefixOpacity(false)
        setPrefixDivider(false)
    }
  }

  const icon = (id) => {
    switch (id) {
      default:
        return
      case 'search':
      case 'searchtrail':
        return <SearchIcon />
      case 'user':
        return <UserIcon />
      case 'eye':
        return eyeIcon
      case 'lock':
        return <UnlockIcon />
    }
  }

  useEffect(() => {
    if (trail === 'eye' && visiblePw) {
      setEyeIcon(<EyeOpenIcon />)
      setType('text')
    }
    else if (trail === 'eye') {
      setEyeIcon(<EyeOpenSlashIcon />)
      setType('password')
    }
    else {
      setType('text')
    }
  }, [trail, visiblePw, setEyeIcon])

  return (
    <ContentContainer>
      <p>The text field is equipped for sophisticated designs that display informative, warning, and error visuals.</p>
      <SegmentContainer>
        <h3>Interactive Demo</h3>
        <DemoContainer>
          <div className="gridcenter" style={{ height: 180 }}>
            <TextField type={type} leadIcon={icon(lead)} trailIcon={icon(trail)} trailClick={trailClick} clear={clear} value={value} onChange={(e) => setValue(e.target.value)} prefixDivider={prefixDivider} suffixDivider={suffixDivider} suffix={suffix} prefix={prefix} prefixOpacity={prefixOpacity} suffixOpacity={suffixOpacity} size={size} placeholder={placeholder} validation={validation} label={label} helper={helper} />
          </div>
        </DemoContainer>
      </SegmentContainer>
      <SegmentContainer>
        <div className="variants-container">
          <p>Type</p>
          <div className="label-container flex-container" style={{ gap: "1rem" }}>
            {[{ name: "Default", id: 'default' }, { name: 'Left', id: 'left' }, { name: 'Right', id: 'right' }, { name: 'Left + Right', id: 'leftright' }, { name: 'Password', id: 'password' }, { name: 'Search', id: "search" }].map((variant, i) => (
              <span key={`variant${i}`}>
                <input type="radio" onClick={changeVariant} name="variant" id={variant.id} />
                <label htmlFor={variant.id}>{variant.name}</label>
              </span>
            ))}
          </div>
        </div>
        <div className="middle-row flex-responsive" style={{ gap: "2rem" }}>
          <div className="size-container">
            <p>Length</p>
            <ul className="sizes label-container flex-container wrap" style={{ gap: "1rem" }}>
              {[{ alpha: "xs", width: "96px" }, { alpha: "s", width: "200px" }, { alpha: "m", width: "304px" }, { alpha: "l", width: "408px" }, { alpha: "xl", width: "512px" }].map((option, i) => (
                <li key={`length${i}`}>
                  <input onChange={changeSize} type="radio" name="sizetextfield" id={option.alpha} checked={size === option.alpha ? true : false} />
                  <label htmlFor={option.alpha}><span className="alpha">{option.alpha}</span><span className="px">{option.width}</span></label>
                </li>
              ))}
            </ul>
          </div>
          <div className="validation-container">
            <p>Validation</p>
            <ul className="validations label-container flex-container" style={{ gap: '1rem' }}>
              {validations.map((valid, i) => (
                <li key={`valid${i}`}>
                  <input checked={validation === valid.validation ? true : false} onChange={changeValidation} onClick={changeValidation} type="radio" name="validation" id={valid.validation} />
                  <label htmlFor={valid.validation}>{valid.type}</label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SegmentContainer>
      <SegmentContainer>
        <ShowCodeBtn open={showExtraControls} onclick={()=>setShowExtraControls(!showExtraControls)}>Extra Controls</ShowCodeBtn>
        {showExtraControls && <div className="extra-controls stack" style={{ gap: "1rem" }}>
          <div className="top-row flex-responsive full" style={{ gap: '2rem' }}>
            <div className="label-container">
              <p>Label</p>
              <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} name="label" id="label" />
            </div>
            <div className="placeholder-container">
              <p>Placeholder</p>
              <input type="text" value={placeholder} onChange={(e) => setPlaceholder(e.target.value)} name="placeholder" id="placeholder" />
            </div>
            <div className="helper-container">
              <p>Helper Text</p>
              <input type="text" value={helper} onChange={(e) => setHelper(e.target.value)} name="helper" id="helper" />
            </div>
          </div>
          <div className="flex-container wrap" style={{ gap: '2rem' }}>
            <div className="icon-container">
              <p>Leading Icon</p>
              <div className="label-container flex-container" style={{ gap: "1rem" }}>
                <input checked={lead === 'search' ? true : false} onChange={changeLead} onClick={changeLead} type="radio" name="lead" id="search" />
                <label htmlFor="search"><SearchIcon /></label>
                <input checked={lead === 'user' ? true : false} onChange={changeLead} onClick={changeLead} type="radio" name="lead" id="user" />
                <label htmlFor="user"><UserIcon /></label>
                <input checked={lead === 'lock' ? true : false} onChange={changeLead} onClick={changeLead} type="radio" name="lead" id="lock" />
                <label htmlFor="lock"><UnlockIcon /></label>
              </div>
            </div>
            <div className="prefix-container" style={{ flex: 1 }}>
              <div className="label flex-container between" style={{ gap: "1rem" }}><p style={{ flex: 1 }}>Prefix</p><ToggleBtn id="prefixOpacity" click={() => setPrefixOpacity(prev => !prev)} checked={prefixOpacity} notext={false} off={"Full Opacity"} on={"50 Opacity"} /><ToggleBtn id="prefix" click={() => setPrefixDivider(prev => !prev)} checked={prefixDivider} notext={false} off={"No Divider"} on={"Divider"} /></div>
              <input type="text" name="prefix" id="prefix" value={prefix} onChange={(e) => setPrefix(e.target.value)} />
            </div>
            <div className="suffix-container" style={{ flex: 1 }}>
              <div className="label flex-container between" style={{ gap: "1rem" }}>
                <p style={{ flex: 1 }}>Suffix</p>
                <ToggleBtn id="suffixOpacity" click={() => setSuffixOpacity(prev => !prev)} checked={suffixOpacity} notext={false} off={"Full Opacity"} on={"50 Opacity"} />
                <ToggleBtn id="suffix" click={() => setSuffixDivider(prev => !prev)} checked={suffixDivider} notext={false} off={"No Divider"} on={"Divider"} />
              </div>
              <input type="text" name="suffix" id="suffix" value={suffix} onChange={(e) => setSuffix(e.target.value)} />
            </div>
            <div className="icon-container">
              <p>Trailing Icon</p>
              <div className="label-container flex-container" style={{ gap: "1rem" }}>
                <input checked={trail === 'searchtrail' ? true : false} onChange={changeTrail} onClick={changeTrail} type="radio" name="trail" id="searchtrail" />
                <label htmlFor="searchtrail"><SearchIcon /></label>
                <input checked={trail === 'eye' ? true : false} onChange={changeTrail} onClick={changeTrail} type="radio" name="trail" id="eye" />
                <label htmlFor="eye"><EyeOpenSlashIcon /></label>
              </div>
            </div>
          </div>
        </div>}
      </SegmentContainer>
      <FigmaLink url="https://www.figma.com/file/IIQVKRzvcftx14GfAooG5N/?node-id=46%3A1882" />
      <hr />
    </ContentContainer>
  )
}

export default TextFieldShowcase
