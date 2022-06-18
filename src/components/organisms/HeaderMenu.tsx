import React from "react"
import styled from "styled-components"

const Header = styled.div`
display: block;
`;

const List = styled.ul`
display: flex;
`;

const Item = styled.li`
list-style-type: none;
`;

export default function HeaderMenu() {

  return (
    <Header>
      <List>
        <Item>プロフィール</Item>
        <Item>日記</Item>
        <Item>ギャラリ〜</Item>
      </List>
    </Header>
  )
}
