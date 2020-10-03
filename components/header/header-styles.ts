import styled from 'styled-components'

export const Header = styled.header`
  background-color: #fff;
  height: 80px;
  box-shadow: 0 3px 2px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 20px;

  @media screen and (min-width: 992px) {
    padding: 0px 40px;
  }

  @media screen and (min-width: 1600px) {
    padding: 0px 80px;
  }
`
export const Title = styled.h2`
  color: #2f2f2f;
  margin: 0;
`
