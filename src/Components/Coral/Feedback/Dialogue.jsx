import React from 'react'
import { coral } from '../StyledCoral'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import InfoFIcon from '@seaweb/coral/icons/InfoF'
import CheckCircleFIcon from '@seaweb/coral/icons/CheckCircleF'
import CrossCircleFIcon from '@seaweb/coral/icons/CrossCircleF'
import WarningFIcon from '@seaweb/coral/icons/WarningF'
import CrossIcon from '@seaweb/coral/icons/Cross'
import Button from '@seaweb/coral/components/Button';

const IconContainer = styled.div`
padding: .5rem 0;
`

const ButtonContainer = styled.div`
display: flex;
justify-content: flex-end;
gap: 1rem;
padding: .5rem 0;
`

const DialogueTitle = styled.div`
padding: .5rem 0;
display: flex;
align-items: center;
justify-content: space-between;
gap: 1rem;
`

const DialogueText = styled.div`
padding: .5rem 0;
color: ${coral.colors.gray.primary};
${coral.type.body}
`

const Dialogue = ({ animate, children, status, title, size, primaryBtn, secondaryBtn, tertiaryBtn, close }) => {

  const [dialogSize, setDialogSize] = useSpring(() => ({ width: 480, config: { tension: 520, friction: 40 } }))
  const staticSize = useSpring(size === 'small' ? { width: 480 } : size === 'medium' ? { width: 600 } : size === 'large' ? { width: 840 } : size === 'extralarge' ? { width: 1200 } : '')

  switch (size) {
    default:
    case 'small':
      setDialogSize.start({ width: 480 })
      break
    case 'medium':
      setDialogSize.start({ width: 600 })
      break
    case 'large':
      setDialogSize.start({ width: 840 })
      break
    case 'extralarge':
      setDialogSize.start({ width: 1200 })
      break
  }

  const icon = (status) => {
    switch (status) {
      default:
        return false
      case "infod":
        return <InfoFIcon size={24} color={coral.colors.function.blue} />
      case "checkd":
        return <CheckCircleFIcon size={24} color={coral.colors.function.green} />
      case "crossd":
        return <CrossCircleFIcon size={24} color={coral.colors.function.red} />
      case "warnd":
        return <WarningFIcon size={24} color={coral.colors.function.yellow} />
    }
  }

  return (
    <animated.div style={animate ? dialogSize : staticSize}>
      <div className='coral dialogue-container'>
        <IconContainer>{icon(status)}</IconContainer>
        <div className="dialogue-content">
          <DialogueTitle><h3>{title}</h3><CrossIcon onClick={close} /></DialogueTitle>
          <DialogueText>{children}</DialogueText>
          {primaryBtn || secondaryBtn || tertiaryBtn ?
            <ButtonContainer>
              {tertiaryBtn && <Button variant="text">{tertiaryBtn}</Button>}
              {secondaryBtn && <Button variant="outlined">{secondaryBtn}</Button>}
              {primaryBtn && <Button>{primaryBtn}</Button>}
            </ButtonContainer> : ''}
        </div>
      </div>
    </animated.div>
  )
}

export default Dialogue

Dialogue.defaultProps = {
  animate: false,
}
