import Head from 'next/head'
import Header from 'components/organisms/Header'
import Container from 'components/organisms/Container'

export default function Home() {
  return (
    <div>
      <Head>
        <title>小粋ちゃんにっき</title>
        <meta name="description" content="シルバー文鳥小粋ちゃんの毎日" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Header></Header>
      <Container></Container>
      </main>
    </div>
  )
}
