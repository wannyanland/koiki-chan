import React from "react"
import styled from "styled-components"

const List = styled.ul`
padding: 0;
margin:0;
display: flex;
flex-wrap: wrap;
`;

const Item = styled.li`
list-style-type: none;
min-width: 150px;
padding: 10px;
text-align: center;
border: 5px solid #808080;
border-bottom: 0;
border-radius: 5px 5px 0 0;
background-color: white;
gap: 15px;
:hover {
  border-color: transparent;
  background-color: #43919B;
  color: white;
  font-weight: bold;
}
`;

export default function HeaderMenu() {

  return (
      <List>
        <Item>ホーム</Item>
        <Item>プロフィール</Item>
        <Item>にっき</Item>
        <Item>ギャラﾘ</Item>
      </List>
  )
}
