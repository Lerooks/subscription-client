import React, { FormEvent, ReactElement } from 'react'
import HomeLayout from 'layouts/home-layout'
import Home from './home'

export default function HomeContainer(): ReactElement {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    console.log(event)
  }

  return (
    <HomeLayout>
      <Home handleSubmit={handleSubmit}></Home>
    </HomeLayout>
  )
}
