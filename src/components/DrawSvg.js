import React from "react";
import styled from "styled-components";
import Vector from "../Icons/Vector";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import { keyframes } from "styled-components";

const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  color :white;
  overflow: hidden;
  
 
  svg {
    display: inline-block;
    width: 100%;
    height: 100%;
    color :white;
    
  }

  @media (max-width: 48em) {
    left: 1rem;
  }
`;

const Bounce = keyframes`
  from { transform: translateX(-50%) scale(0.5); }
  to { transform: translateX(-50%) scale(1); }
  
`;

const Ball = styled.div`
  position: absolute;
  
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #fffff;
  animation: ${Bounce} 0.5s linear infinite alternate;
  background-color:white
  @media (max-width: 48em) {
    left: 1rem;
  }
`;

const DrawSvg = () => {
  const ref = useRef(null);
  const ballRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    // Find the SVG path by class name
    let svg = document.querySelector(".svg-path");

    const length = svg.getTotalLength();

    // Start positioning of SVG drawing
    svg.style.strokeDasharray = length;
    
    // Set the stroke color to white
    svg.style.stroke = '#EEEDDE';

    // Hide SVG before scrolling starts
    svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (self) => {
          const draw = length * self.progress;

          // Reverse the drawing when scroll goes up
          svg.style.strokeDashoffset = length - draw;
        },
        onToggle: (self) => {
          if (self.isActive) {
            ballRef.current.style.display = "none";
          } else {
            ballRef.current.style.display = "inline-block";
          }
        },
      },
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <>
      <Ball ref={ballRef} />
      <VectorContainer ref={ref}>
        <Vector />
      </VectorContainer>
    </>
  );
};

export default DrawSvg;
