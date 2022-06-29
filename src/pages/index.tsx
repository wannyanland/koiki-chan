import Head from "next/head";
import Header from "components/organisms/Header";
import Container from "components/organisms/Container";
import styled from "styled-components";

const MainWrapper = styled.div`
margin: 0 auto;
text-align: center;
`

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
        <Container active={1}>
          <MainWrapper>
            <div>
              <p>NEWS</p>
              <div></div>
            </div>

            <div>
              <p>NEW！にっき</p>
              <div></div>
            </div>

            <div>
              <p>お問い合わせはこちらから🐥</p>
              <div></div>
            </div>
          </MainWrapper>
        </Container>
      </main>
    </div>
  );
}
