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

// const ButtonContainer = styled.div`
//   width: 80%;
//   align-self: flex-start;

//   @media (max-width: 48em) {
//     align-self: center;
//     text-align: center;

//     button {
//       margin: 0 auto;
//     }
//   }
// `;

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
        Step Into NFT Adventure
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("<span class='text-1'>Explore</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-2'>Earn</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-3'>Boost Local Business!</span>")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>Bored Of NFTs? Get Creative with 3D and Geo NFTs</SubTitle>
      <ButtonContainer>
        <a href="https://drive.google.com/file/d/1HpqppcYhUHS2m4eUl2Xfazk0Qgei3NNQ/view" target="_blank" rel="noopener noreferrer">
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


{/* <LogoText>
  <Link to="/">
    <img src="path/to/your/local/folder/logo.jpg" alt="Logo">
  </Link>
</LogoText> */}


{/* <VideoContainer>
      <video src={GIF} type="video/mp4" autoPlay muted loop />
       </VideoContainer> */}

    // import GIF from "../assets/Home Video.mp4";