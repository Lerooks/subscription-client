import React, { ReactElement, ReactNode } from 'react'
import * as S from './base-layout-styles'

interface Props {
  children: ReactNode
}

export default function BaseLayout({ children }: Props): ReactElement {
  return (
    <S.Grid>
      <S.AsideWrapper></S.AsideWrapper>
      <S.HeaderWrapper></S.HeaderWrapper>
      <S.ContentWrapper> {children} </S.ContentWrapper>
    </S.Grid>
  )
}
