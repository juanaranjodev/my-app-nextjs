import Head from 'next/head'
import '@/styles/NotFound.module.css'


export default function NotFound() {
  return (
    <>
      <Head>
        <title>NotFound</title>
        <meta name="description" content="NotFound" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <h1 className=''>Pagina NotFound</h1>
      </main>
    </>
  )
}
