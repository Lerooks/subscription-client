import styled from 'styled-components'
import { Button } from 'components/button/button-styles'

export const Form = styled.form``

export const FormGroup = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const InputGroup = styled.div`
  margin-bottom: 0px;

  @media screen and (min-width: 500px) {
    margin-bottom: 0px;
  }
`

export const FormActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;
  margin-top: 20px;

  ${Button} {
    width: 100%;
  }
`
