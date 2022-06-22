import Head from 'next/head'
import Header from 'components/organisms/Header'
import Container from 'components/organisms/Container'

export default function Gallery() {
  return (
    <div>
      <Head>
        <title>ギャラリー | 小粋ちゃんにっき</title>
        <meta name="description" content="主に小粋ちゃんの写真です" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Header></Header>
      <Container active={4}></Container>
      </main>
    </div>
  )
}