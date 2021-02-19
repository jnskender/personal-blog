import React, { useContext } from "react";
import { GlobalContext } from "../pages/_app";
import { getStrapiMedia } from "../lib/media";
import styled from "styled-components";

const StyledAvatar = styled.img`
  height: 30px;
  border-radius: 50%;
`;

export default function Avatar() {
  const { favicon } = useContext(GlobalContext);
  const avatar = getStrapiMedia(favicon);
  return (
    <StyledAvatar src={avatar} alt="John Skender's Portrait"></StyledAvatar>
  );
}
