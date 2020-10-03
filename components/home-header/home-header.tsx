import React, { ReactElement } from 'react'
import Link from 'next/link'
import * as S from './home-header-styles'

export default function HomeHeader(): ReactElement {
  return (
    <S.Header>
      <S.Container>
        <S.LeftWrapper>
          <S.Logo src="/assets/images/pokemon/pokemon-logo.svg" alt="Pokémon" title="Pokémon"></S.Logo>
        </S.LeftWrapper>
        <S.RightWrapper>
          <S.Nav>
            <S.Menu>
              <S.MenuItem>
                <Link href="/">Register</Link>
              </S.MenuItem>
              <S.MenuItem>
                <Link href="/subscriptions"> Subscriptions </Link>
              </S.MenuItem>
            </S.Menu>
          </S.Nav>
        </S.RightWrapper>
      </S.Container>
    </S.Header>
  )
}
