import React, { ReactElement } from 'react'
import Head from 'next/head'
import Home from 'components/home-page'
import Favicon from 'components/favicon'

export default function IndexPage(): ReactElement {
  return (
    <>
      <Head>
        <title> Pokémon Tournament </title>
        <Favicon></Favicon>
      </Head>
      <Home></Home>
    </>
  )
}
