import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import Button from "./Button";
import { style } from "../styles/styles";
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transformation: capitalize;
  width: 80%;
  color: ${style.primaryText};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }

  .text-1 {
    color: #92C7CF;
  }

  .text-2 {
    color: #AAD7D9;
  }

  .text-3 {
    color:#40A2E3;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

const SubTitle = styled.h3`
  font-size: ${style.fontmd};
  text-transform: capitalize;
  color: ${style.primaryText};
  font-weight: 400;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
`;


const ButtonContainer = styled.div`
  width: 80%;
  align-self: flex-start;
  display: flex; /* Added to make the buttons align horizontally */

  /* Added styles to space out the buttons */
  button {
    margin-right: 70px; /* Adjust this value to increase or decrease the space between buttons */
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;

    button {
      margin: 0 auto;
    }
  }
`;


const TypeWriterText = () => {
  return (
    <>
      <Title>
      A next-gen geo-tagged playground where players meet opportunities offered with a timeless technology.
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
            .typeString("<span class='text-1'>Map Based Gameplay</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-2'>REWARDS USERS FOR MOVEMENT</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-3'>Provide market visibility to communities and businesses.</span>")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>Bored Of NFTs? Get Creative with 3D and Geo NFTs</SubTitle>
      <ButtonContainer>
        <a href="https://drive.google.com/file/d/10IB1WL2KcvLi1MQmlxjPwgGcDtmhRzph/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <Button text="Download" />
        </a>
        <a href="https://forms.gle/XPbe9APEUbbn9iDS6" target="_blank" rel="noopener noreferrer">
          <Button text="Business" />
        </a>
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;

