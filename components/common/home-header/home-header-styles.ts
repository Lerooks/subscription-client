import styled from 'styled-components'

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  @media screen and (min-width: 992px) {
    padding: 10px 40px;
  }

  @media screen and (min-width: 1600px) {
    padding: 10px 80px;
  }
`

export const LeftWrapper = styled.div``

export const Logo = styled.img`
  max-width: 200px;
`

export const RightWrapper = styled.div``

export const Nav = styled.nav``

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const MenuItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 20px;
  }
`

export const Link = styled.a`
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  color: #f2f2f2;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.75;
  }
`
