import React, { ReactElement } from 'react'

export default function Favicon(): ReactElement {
  return (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/assets/images/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/assets/images/favicon/safari-pinned-tab.svg" color="#e83250" />
      <link rel="shortcut icon" href="/assets/images/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/assets/images/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
    </>
  )
}
