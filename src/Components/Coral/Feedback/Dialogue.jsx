import React from 'react'
import { coral } from '../StyledCoral'
import styled from 'styled-components'
import InfoFIcon from '@seaweb/coral/icons/InfoF'
import CheckCircleFIcon from '@seaweb/coral/icons/CheckCircleF'
import CrossCircleFIcon from '@seaweb/coral/icons/CrossCircleF'
import WarningFIcon from '@seaweb/coral/icons/WarningF'
import CrossIcon from '@seaweb/coral/icons/Cross'
import Button from '@seaweb/coral/components/Button';

const DialogueContainer = styled.div`
width: ${props => props.size === 'small' ? '480px' : props.size === 'medium' ? '600px' : props.size === 'large' ? '840px' : props.size === 'extralarge' ? '1200px' : ''};
max-width: 100%;
transition: all .3s ease;
`

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

const Dialogue = ({ children, status, title, size, primaryBtn, secondaryBtn, tertiaryBtn, close }) => {

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
    <DialogueContainer size={size}>
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
    </DialogueContainer>
  )
}

export default Dialogue
