import Head from "next/head";
import Header from "components/organisms/Header";
import Container from "components/organisms/Container";
import styled from "styled-components";

const MainWrapper = styled.div`
width: 50%;
margin: 0 auto;
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
            <p>来てくれてありがとう</p>
          </MainWrapper>
        </Container>
      </main>
    </div>
  );
}
