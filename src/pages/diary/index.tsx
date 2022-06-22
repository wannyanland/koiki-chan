import Head from 'next/head'
import Header from 'components/organisms/Header'
import Container from 'components/organisms/Container'

export default function Diary() {
  return (
    <div>
      <Head>
        <title>にっき | 小粋ちゃんにっき</title>
        <meta name="description" content="気まぐれ小粋ちゃんにっき" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Header></Header>
      <Container active={3}></Container>
      </main>
    </div>
  )
}