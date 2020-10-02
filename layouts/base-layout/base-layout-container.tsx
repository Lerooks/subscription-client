import React, { ReactElement, ReactNode } from 'react'
import GlobalStyle from 'styles/global'
import BaseLayout from './base-layout'

interface Props {
  children: ReactNode
}

export default function BaseLayoutContainer({ children }: Props): ReactElement {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <BaseLayout>{children}</BaseLayout>
    </>
  )
}
