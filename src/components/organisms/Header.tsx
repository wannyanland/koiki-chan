import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
background-color: #30AADD;
`

const Title = styled.h1`
color: white;
margin: 0;
text-align: center;
padding: 30px 0 30px 0;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Title>小粋ちゃんにっき - ごはんはシードにしてちょーだい -</Title>
    </HeaderContainer>
  )
}