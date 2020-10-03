import React, { ReactElement } from 'react'
import Link from 'next/link'
import * as S from './sidebar-styles'

export default function Sidebar(): ReactElement {
  return (
    <S.Aside>
      <S.LogoWrapper>
        <S.Logo src="/assets/images/pokemon/pokemon-logo.svg" alt="Pokémon"></S.Logo>
      </S.LogoWrapper>
      <S.Nav>
        <S.Menu>
          <S.MenuItem>
            <Link href="/"> Register </Link>
          </S.MenuItem>
          <S.MenuItem>
            <Link href="/subscriptions"> Subscriptions </Link>
          </S.MenuItem>
        </S.Menu>
      </S.Nav>
    </S.Aside>
  )
}
