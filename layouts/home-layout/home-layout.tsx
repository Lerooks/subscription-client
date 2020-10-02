import React, { ReactElement, ReactNode } from 'react'
import * as S from './home-layout-styles'

interface Props {
  children: ReactNode
}

export default function HomeLayout({ children }: Props): ReactElement {
  return <S.Wrapper> {children} </S.Wrapper>
}
