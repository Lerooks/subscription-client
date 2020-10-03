import React, { FormEvent, ReactElement } from 'react'
import HomeLayout from 'layouts/home-layout'
import HomeHeader from 'components/home-header'
import Home from './home-page'

export default function HomeContainer(): ReactElement {
  return (
    <HomeLayout>
      <HomeHeader></HomeHeader>
      <Home></Home>
    </HomeLayout>
  )
}
