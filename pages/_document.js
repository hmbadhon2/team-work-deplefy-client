import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=' dark:bg-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


// bg-gradient-to-r from-indigo-100 via-purple-10