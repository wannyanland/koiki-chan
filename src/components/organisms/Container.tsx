import styled from "styled-components"
import React, { ReactNode } from "react";
import HeaderMenu from "./HeaderMenu";

const ContainerWrap = styled.div`
margin: 0 auto;
width: 900px;
padding: 0 30px;
`

const DivContainer = styled.div`
border: 5px solid #808080;
min-height: 600px;
max-width: 900px;
border-radius: 0 5px 5px 5px;
background-color: white;
`

export default function Container(props: {children?: ReactNode; }) {
  return (
    <ContainerWrap>
    <HeaderMenu></HeaderMenu>
    <DivContainer>{props.children}</DivContainer>
    </ContainerWrap>
  )
}