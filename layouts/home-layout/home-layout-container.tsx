import React, { ReactElement, ReactNode } from 'react'
import GlobalStyle from 'styles/global'
import HomeLayout from './home-layout'

interface Props {
  children: ReactNode
}

export default function BaseLayoutContainer({ children }: Props): ReactElement {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <HomeLayout>{children}</HomeLayout>
    </>
  )
}
