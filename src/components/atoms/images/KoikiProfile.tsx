import styled from "styled-components";
import React from "react";

const KoikiImg = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  background-color: #43919b;
`;

export default function KoikiProfileImg() {
  return <KoikiImg src="img/koiki_profile.png"></KoikiImg>;
}
