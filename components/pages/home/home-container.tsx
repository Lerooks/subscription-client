import React, { FormEvent, ReactElement } from 'react'
import HomeLayout from 'layouts/home-layout'
import HomeHeader from 'components/common/home-header'
import Home from './home'

export default function HomeContainer(): ReactElement {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    console.log(event)
  }

  return (
    <HomeLayout>
      <HomeHeader></HomeHeader>
      <Home handleSubmit={handleSubmit}></Home>
    </HomeLayout>
  )
}
