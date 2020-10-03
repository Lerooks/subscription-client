import React, { ReactElement } from 'react'
import * as S from './home-header-styles'

export default function HomeHeader(): ReactElement {
  return (
    <S.Header>
      <S.Container>
        <S.LeftWrapper>
          <S.Logo src="/assets/images/pokemon/pokemon-logo.svg" alt="Pokemon" title="Pokemon"></S.Logo>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.Nav>
            <S.Menu>
              <S.MenuItem>
                <S.Link href="/"> Register </S.Link>
              </S.MenuItem>
              <S.MenuItem>
                <S.Link href="/"> List of Registers </S.Link>
              </S.MenuItem>
            </S.Menu>
          </S.Nav>
        </S.RightWrapper>
      </S.Container>
    </S.Header>
  )
}
