import styled from 'styled-components'
import { Button } from 'components/common/button/button-styles'

export const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 20px 20px 20px;

  @media screen and (min-width: 992px) {
    padding: 160px 40px 40px 40px;
  }

  @media screen and (min-width: 1600px) {
    padding: 160px 80px 80px 80px;
  }
`

export const Content = styled.div``

export const Title = styled.h1``

export const Text = styled.p``

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

export const BannerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #c92c44, 50%, #ea482c);
  padding: 30px 0;

  @media screen and (min-width: 992px) {
    padding: 160px 0 30px 0;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 90px;
      background-color: #f2f2f2;
      clip-path: polygon(0 0, 0% 100%, 100% 100%);
    }
  }
`

export const Banner = styled.img`
  max-width: calc(100% - 200px);
`
