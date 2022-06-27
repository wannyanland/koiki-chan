import Head from "next/head";
import Header from "components/organisms/Header";
import Container from "components/organisms/Container";
import KoikiProfileImg from "components/atoms/images/KoikiProfile";
import Speech from "components/organisms/Speech";
import styled from "styled-components";
import ProfileIcon from "components/atoms/icons/ProfileIcon";
import Github from "components/atoms/icons/Github";

const SpeechProfile = styled.dl`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  align-items: center;

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
`;

const ProfileWrap = styled.div`
  display: flex;
`;

const KainushiWrap = styled(ProfileWrap)`
  margin-top: 30px;
`;

const KainushiProfile = styled.div`
  line-height: 1.7;
  margin-bottom: 10px;
`;

const KainushiText = styled.p`
text-align: center;
margin-top: 5px;
font-size: 12px;
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
          <ProfileWrap>
            <KoikiProfileImg></KoikiProfileImg>
            <Speech>
              <SpeechProfile>
                <dt>名前</dt>
                <dd>小粋 (こいき)</dd>

                <dt>あだ名</dt>
                <dd>
                  こいちゃん / こいち / こいき丸 / ちょいちー / ちょいちゃん
                  ...etc
                </dd>

                <dt>種類</dt>
                <dd>シルバー文鳥</dd>

                <dt>誕生日</dt>
                <dd>2021/11/末</dd>

                <dt>出身</dt>
                <dd>しずおか県</dd>

                <dt>好きなたべもの</dt>
                <dd>豆苗</dd>

                <dt>いつものご飯</dt>
                <dd>
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="https://www.amazon.co.jp/%E3%82%BA%E3%83%97%E3%83%AA%E3%83%BC%E3%83%A0-ZuPreem-%E3%83%95%E3%83%AB%E3%83%BC%E3%83%84%E3%83%96%E3%83%AC%E3%83%B3%E3%83%89-%E3%82%AB%E3%83%8A%E3%83%AA%E3%82%A2%E3%83%BB%E3%83%95%E3%82%A4%E3%83%B3%E3%83%81-%E6%97%A5%E6%9C%AC%E8%AA%9E%E3%83%90%E3%83%BC%E3%82%B8%E3%83%A7%E3%83%B3/dp/B08XNFMGJL/ref=sr_1_12?crid=3D2M8AJO3QAGO&keywords=%E6%96%87%E9%B3%A5+%E3%83%9A%E3%83%AC%E3%83%83%E3%83%88&qid=1656228186&sprefix=%E6%96%87%E9%B3%A5+%2Caps%2C193&sr=8-12"
                  >
                    ズプリーム (ZuPreem) フルーツブレンド XS
                  </a>
                </dd>
              </SpeechProfile>
            </Speech>
          </ProfileWrap>

          <KainushiWrap>
            <div>
              <ProfileIcon />
              <KainushiText>飼い主</KainushiText>
            </div>
            <Speech>
              <KainushiProfile>
                <p>
                小粋ちゃんのご飯を稼ぐため働くWebエンジニア
                </p>
              </KainushiProfile>
              <Github></Github>
            </Speech>
          </KainushiWrap>
        </Container>
      </main>
    </div>
  );
}
