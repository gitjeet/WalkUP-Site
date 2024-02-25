import React, { useRef } from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";


import B1 from "../../assets/Showcase-images/apple.svg"
import B2 from "../../assets/Showcase-images/B2.svg"
import B3 from "../../assets/Showcase-images/B3.svg"
import AC1 from "../../assets/Showcase-images/AC1.svg"
import AC2 from "../../assets/Showcase-images/AC2.svg"
import AC3 from "../../assets/Showcase-images/AC3.svg"
import CP1 from "../../assets/Showcase-images/CP1.svg"
import CP2 from "../../assets/Showcase-images/CP2.svg"
import CP3 from "../../assets/Showcase-images/CP3.svg"
import ETH from "../../assets/icons8-ethereum-48.png";
import {linear_gradient3} from "../../styles/styles"
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  & > *:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  & > *:last-child {
    animation-duration: 15s;

    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`;

const move = keyframes`
  0%{ transform: translateX(100%)};
  100%{ transform: translateX(-100%)};
`;

const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} linear infinite ${(props) => props.direction};
`;

const ImgContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.body};

  border-radius: 20px;
  cursor: pointer;

  @media (max-width: 48em) {
    width: 12rem;
  }

  @media (max-width: 30em) {
    width: 10rem;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  span {
    font-size: ${(props) => props.theme.fontsm};
    color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }

  h1 {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.body};
    font-weight: 600;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1rem;
    height: auto;
  }
`;

const NftItem = ({ img, number = 0, price = 0, passRef }) => {
  let play = (e) => {
    passRef.current.style.animationPlayState = "running";
  };
  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };

  return (
    <ImgContainer onMouseOver={(e) => pause(e)} onMouseOut={(e) => play(e)}>
      <img src={img} alt="The Weirdos" />
      <Details>
        <div>
          <span>Weirdos</span> <br />
          <h1>#{number}</h1>
        </div>

        <div>
          <span>Price</span>
          <Price>
            <img src={ETH} alt="ETH" />
            <h1>{Number(price).toFixed(1)}</h1>
          </Price>
        </div>
      </Details>
    </ImgContainer>
  );
};

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id="showcase" style={linear_gradient3}>
      <Row direction="none" ref={Row1Ref}>
        <NftItem img={B1} number={852} price={1.0} passRef={Row1Ref} />
        <NftItem img={B2} number={123} price={1.2} passRef={Row1Ref} />
        <NftItem img={B3} number={456} price={2.5} passRef={Row1Ref} />
        <NftItem img={AC1} number={661} price={3.5} passRef={Row1Ref} />
        <NftItem img={AC2} number={452} price={4.7} passRef={Row1Ref} />
      </Row>
      <Row direction="reverse" ref={Row2Ref}>
        <NftItem img={AC3} number={888} price={1.2} passRef={Row2Ref} />
        <NftItem img={CP1} number={211} price={3.2} passRef={Row2Ref} />
        <NftItem img={CP2} number={455} price={1.8} passRef={Row2Ref} />
        <NftItem img={CP3} number={456} price={5.1} passRef={Row2Ref} />
        <NftItem img={ETH} number={865} price={3.7} passRef={Row2Ref} />
      </Row>
    </Section>
  );
};

export default Showcase;
