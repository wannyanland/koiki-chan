import Head from 'next/head'
import Header from 'components/organisms/Header'
import Container from 'components/organisms/Container'
import KoikiProfileImg from 'components/atoms/images/KoikiProfile'
import Speech from 'components/organisms/Speech'
import styled from "styled-components"

const SpeechProfile = styled.dl`
display: flex;
flex-wrap: wrap;
margin: 0;

dt {
  width: 28%;
  padding: 10px;
}

dd {
  width: 62%;
  padding: 10px;
  line-height: 1.4;
  margin-left: 20px;
}
`

const KoikiProfileWrap = styled.div`
display: flex;
`

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
      <Container active={2}>
        <KoikiProfileWrap>
        <KoikiProfileImg></KoikiProfileImg>
        <Speech>
          <SpeechProfile>
            <dt>名前</dt>
            <dd>小粋 (こいき)</dd>

            <dt>あだ名</dt>
            <dd>こいちゃん / こいち / こいき丸 / ちょいちー / ちょいちゃん ...etc</dd>

            <dt>誕生日</dt>
            <dd>2021/11/末</dd>

            <dt>出身</dt>
            <dd>しずおか県</dd>

            <dt>好きなたべもの</dt>
            <dd>とうみょう</dd>
          </SpeechProfile>
        </Speech>
        </KoikiProfileWrap>
      </Container>
      </main>
    </div>
  )
}