import Head from 'next/head'
import Header from 'components/organisms/Header'
import Container from 'components/organisms/Container'

export default function Profile() {
  return (
    <div>
      <Head>
        <title>プロフィール | 小粋ちゃんにっき</title>
        <meta name="description" content="小粋ちゃんのプロフィールです" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Header></Header>
      <Container active={2}></Container>
      </main>
    </div>
  )
}