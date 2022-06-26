import React, { ReactNode }  from "react";
import styled from "styled-components"

const SpeechContainer = styled.div`
position: relative;
display: inline-block;
padding: 10px;
min-width: 200px;
max-width: 100%;
background: #D8E3E7;
border: solid 3px #D8E3E7;
box-sizing: border-box;
border-radius: 5px;
margin-left: 20px;
:after {
  content: "";
  position: absolute;
  top: 35%;
  left: -30px;
  margin-top: -14px;
  border: 14px solid transparent;
  border-right: 14px solid #D8E3E7;
}
`

export default function Speech(props: {children?: ReactNode}) {
  return (
    <SpeechContainer>
      {props.children}
    </SpeechContainer>

  )
}