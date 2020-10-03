import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-areas: 'header' 'content';
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr;
  height: 100%;

  @media screen and (min-width: 992px) {
    grid-template-areas: 'sidebar header' 'sidebar content';
    grid-template-columns: 270px 1fr;
  }
`

export const AsideWrapper = styled.div`
  grid-area: sidebar;
  height: 100%;
  display: none;

  @media screen and (min-width: 992px) {
    display: block;
  }
`

export const HeaderWrapper = styled.div`
  grid-area: header;
`

export const ContentWrapper = styled.main`
  align-self: baseline;
  grid-area: content;
  padding: 20px 20px;

  @media screen and (min-width: 992px) {
    padding: 20px 40px;
  }

  @media screen and (min-width: 1600px) {
    padding: 20px 80px;
  }
`
