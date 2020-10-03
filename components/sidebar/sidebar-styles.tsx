import styled from 'styled-components'
import { transparentize } from 'polished'

export const Aside = styled.aside`
  background: linear-gradient(180deg, #e83250, 50%, #ea482c);
  height: 100%;
  padding: 60px 20px;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  max-width: 200px;
`

export const Nav = styled.nav`
  margin-top: 80px;
`

export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const MenuItem = styled.li`
  a {
    display: block;
    background-color: ${() => transparentize(0.4, '#fff')};
    border-radius: 6px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 10px;
    padding: 16px 20px;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.3s ease;

    &:hover {
      background-color: ${() => transparentize(0.5, '#fff')};
    }
  }
`
