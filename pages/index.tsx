import React, { ReactElement } from 'react'
import Head from 'next/head'
import Home from 'components/home-page'

export default function IndexPage(): ReactElement {
  return (
    <>
      <Head>
        <title> Pokémon Tournament </title>
      </Head>
      <Home></Home>
    </>
  )
}
