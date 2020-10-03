import React, { ReactElement, ReactNode } from 'react'
import Sidebar from 'components/sidebar'
import Header from 'components/header'
import * as S from './base-layout-styles'

interface Props {
  children: ReactNode
}

export default function BaseLayout({ children }: Props): ReactElement {
  return (
    <S.Grid>
      <S.AsideWrapper>
        <Sidebar></Sidebar>
      </S.AsideWrapper>
      <S.HeaderWrapper>
        <Header></Header>
      </S.HeaderWrapper>
      <S.ContentWrapper> {children} </S.ContentWrapper>
    </S.Grid>
  )
}
