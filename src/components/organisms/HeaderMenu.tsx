import React from "react"
import styled from "styled-components"

const List = styled.ul`
padding: 0;
display: flex;
`;

const Item = styled.li`
list-style-type: none;
min-width: 200px;
padding: 10px;
text-align: center;
border: 5px solid #808080;
border-radius: 5px 5px 0 0;
:nth-child(2n) {
  margin: 0 2px 0 2px;
}
:hover {
  border-color: transparent;
  background-color: #43919B;
  color: white;
  font-weight: bold;
}
`;

export default function HeaderMenu() {

  return (
    <div>
      <List>
        <Item>プロフィール</Item>
        <Item>にっき</Item>
        <Item>ギャラﾘ</Item>
      </List>
    </div>
  )
}
