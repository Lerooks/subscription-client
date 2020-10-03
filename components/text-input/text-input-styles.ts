import styled from 'styled-components'
import { Props } from './text-input'

export const Wrapper = styled.div``

export const Label = styled.label`
  color: #221f2e;
  display: block;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 0.875rem;
  margin: 0 0 5px 0;
  text-transform: uppercase;
`

export const Input = styled.input<Props>`
  -moz-appearance: none;
  -webkit-appearance: none;
  border-radius: 0.25rem;
  border: 1px solid #2e2b3f;
  color: #221f2e;
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 0.75rem 0.9375rem;
  transition: 0.4s ease;
  width: 100%;

  ${props =>
    props.error &&
    `
    border: 2px solid #c92c44;
    
    &:focus {
      border-radius: 0.25rem;
      outline: 1px solid #c92c44;
    }

    ${Helper} {
      color: #c92c44;
    }
  `}

  &::placeholder {
    color: #2e2b3f;
  }

  &:disabled {
    cursor: text;
    background-color: #2e2b3f;
  }
`

export const Helper = styled.div`
  color: #2e2b3f;
  font-size: 0.65rem;
  font-weight: 600;
  line-height: 0.875rem;
  margin: 0 0 5px 0;
`
