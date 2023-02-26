import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-indigo-100  to-purple-10 dark:bg-gradient-to-tr dark:from-black  dark:to-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


// bg-gradient-to-r from-indigo-100 via-purple-10