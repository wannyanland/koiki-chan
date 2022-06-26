import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";

const IconWrap = styled.div`
  border-radius: 50%;
  border: 2px solid #247881;
  padding: 20px;
  width: 75px;
  height: 75px;
  color: #247881;
`;

export default function ProfileIcon() {
  return (
    <IconWrap>
      <FontAwesomeIcon icon={faDove}></FontAwesomeIcon>
    </IconWrap>
  );
}
