import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-areas: 'sidebar header' 'sidebar content';
  grid-template-rows: 80px 1fr;
  grid-template-columns: 270px 1fr;
  height: 100%;
`

export const AsideWrapper = styled.div`
  grid-area: sidebar;
  height: 100%;
`

export const HeaderWrapper = styled.div`
  grid-area: header;
`

export const ContentWrapper = styled.main`
  grid-area: content;
  padding: 20px 20px;

  @media screen and (min-width: 992px) {
    padding: 20px 40px;
  }

  @media screen and (min-width: 1600px) {
    padding: 20px 80px;
  }
`
