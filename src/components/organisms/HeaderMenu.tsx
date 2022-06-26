import React from "react"
import styled from "styled-components"

const List = styled.div`
padding: 0;
margin:0;
display: flex;
flex-wrap: wrap;
gap: 5px;
`;

const Item = styled.a<{isActive: boolean}>`
min-width: 150px;
padding: 10px;
text-align: center;
border: 5px solid #808080;
border-bottom: 0;
border-radius: 5px 5px 0 0;
background-color: white;
cursor: pointer;
:hover {
  border-color: transparent;
  background-color: #43919B;
  color: white;
  font-weight: bold;
}
${(props) => props.isActive && `  
border-color: transparent;
background-color: #43919B;
color: white;
font-weight: bold;`
};
`;

export default function HeaderMenu(props: {active: number}) {
  return (
      <List>
        <Item href="/" isActive={props.active === 1}>ホーム</Item>
        <Item href="/profile" isActive={props.active === 2}>プロフィール</Item>
        <Item href="/diary" isActive={props.active === 3}>にっき</Item>
        <Item href="/gallery" isActive={props.active === 4}>ギャラﾘ</Item>
      </List>
  )
}
