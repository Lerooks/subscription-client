import styled from 'styled-components'
import { transparentize } from 'polished'
import { Props } from './button'

export const Button = styled.button<Props>`
  background-color: ${() => transparentize(0.15, '#3d7dca')};
  border-radius: 4px;
  border: 1px solid transparent;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1rem;
  margin: 0;
  padding: 11px 30px;
  text-transform: uppercase;

  &:hover {
    background-color: #3d7dca;
    border: 1px solid #3d7dca;
    cursor: pointer;
  }

  &:not(:disabled) {
    transition: 0.4s ease;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
    transition: none;
  }
`
