import React from "react";
import styled from "styled-components";

import abhijeet from '../../assets/Nfts/Team/abhijeet.png'
import roshan from '../../assets/Nfts/Team/roshan.png'
import yogesh from '../../assets/Nfts/Team/yogesh.png'
import dalvi from '../../assets/Nfts/Team/dalvi.jpg'
import ConfettiComponent from "../Confetti";
import {roadmap_style} from "../../styles/styles"
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  margin-top:-15px;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transformation: capitalize;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: white;
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;

  backdrop-filter: blur(4px);

  border: 2px solid white;
  border-radius: 20px;

  &:hover {
    img {
      transform: translateY(-2rem) scale(1.2);
    }
  }

  @media (max-width: 30em) {
    width: 70vw;
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.carouselColor};
  border: 1px solid ${(props) => props.theme.text};
  
  padding: 1rem;
  
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: white
  margin-top: 1rem;
  padding-top : 10px;
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(white, 0.9)`};
  font-weight: 400;
`;

const MemberComponent = ({ img, name = " ", position = " " }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  return (
    <Section id="team" style={roadmap_style}>
      <ConfettiComponent />
      <Title>Team</Title>
      <Container>
        
        
        
        
       
        <MemberComponent
          img={roshan}
          name="Roshan"
          position="Founder & FullStack Dev"
        />
        <MemberComponent
          img={yogesh}
          name="Yogesh"
          position="Founder & FullStack Dev"
        />
        <MemberComponent img={abhijeet} name="Abhijeet" position="Founder & Software Dev" />
        <MemberComponent img={dalvi} name="Adity Dalvi" position="Founder & Analyst" /> 
      </Container>
    </Section>
  );
};

export default Team;
