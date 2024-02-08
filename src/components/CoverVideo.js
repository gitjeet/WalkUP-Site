import React from "react";
import styled from "styled-components";
// import GIF from "../assets/Home Video.mp4";
import Home_Video from "../assets/Home Video.gif";
const VideoContainer = styled.div`
  width: 100%;

  video {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;

const CoverVideo = () => {
  return (
    <VideoContainer>
      {/* <video src={Home_Video} type="gif" autoPlay muted loop /> */}
      <img src={Home_Video} alt="Home Video" />
    </VideoContainer>
  );
};

export default CoverVideo;
