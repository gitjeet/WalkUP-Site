import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { style } from "../styles/styles";

const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${style.primaryText};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const Logo = () => {
  return (
    <LogoText>
      <Link to="/">W.</Link>
    </LogoText>
  );
};

export default Logo;
