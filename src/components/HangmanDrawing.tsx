import styled from "styled-components";

// styles for hangman stick
const DrawingWrapper = styled.div`
  position: relative;
  background-color: black;
  border: 1px solid white;
  max-width: 500px;
  width: 100%;
  height: 310px;
  @media (max-height: 600px) {
    height: 250px;
  }
  @media (max-width: 630px) {
    height: 270px;
  }
  @media (max-width: 520px) {
    height: 250px;
  }
`;
const TopLeftDiv = styled.div`
  position: absolute;
  background-color: white;
  width: 10px;
  right: 34%;
  top: 0px;
  animation-name: TopLeftDivColoring;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  @keyframes TopLeftDivColoring {
    0% {
      height: 0%;
      top: 16%;
    }
    100% {
      height: 16%;
      top: 0px;
    }
  }
`;
const TopDiv = styled.div`
  height: 10px;
  background-color: white;
  margin-left: 24%;
  animation-name: TopDivColoring;
  animation-duration: 0.8s;
  opacity: 0%;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  @keyframes TopDivColoring {
    0% {
      width: 0%;
      opacity: 100%;
    }
    100% {
      width: 40%;
      opacity: 100%;
    }
  }
`;
const LongDiv = styled.div`
  width: 10px;
  background-color: white;
  margin-left: 24%;
  animation-name: longDivColoring;
  animation-delay: 0.8s;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  opacity: 0%;
  @keyframes longDivColoring {
    0% {
      height: 0%;
      opacity: 100%;
    }
    100% {
      height: 96%;
      opacity: 100%;
    }
  }
`;
const BottomDiv = styled.div`
  height: 10px;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 10px;
  width: 50%;
  animation-name: BottomDivColoring;
  animation-delay: 1.6s;
  animation-duration: 0.8s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  opacity: 0%;
  @keyframes BottomDivColoring {
    0% {
      width: 0%;
      opacity: 100%;
    }
    100% {
      width: 50%;
      opacity: 100%;
    }
  }
`;
//  end of hangman stick

// styles for body parts
const Head = styled.div`
  width: 10%;
  right: 28%;
  height: 16%;
  top: 14.5%;
  border-radius: 100%;
  border: 10px solid white;
  position: absolute;
`;
const Body = styled.div`
  width: 10px;
  right: 34%;
  top: 35%;
  height: 26%;
  background-color: white;
  position: absolute;
`;
const RightArm = styled.div`
  width: 14%;
  right: 21%;
  height: 10px;
  top: 48%;
  background-color: white;
  position: absolute;
  rotate: -30deg;
  transform-origin: left bottom;
`;
const LeftArm = styled.div`
  width: 14%;
  right: 35%;
  height: 10px;
  top: 48%;
  background-color: white;
  position: absolute;
  rotate: 30deg;
  transform-origin: right bottom;
`;
const RigthLeg = styled.div`
  width: 16%;
  right: 20%;
  height: 10px;
  top: 57%;
  background-color: white;
  position: absolute;
  rotate: 60deg;
  transform-origin: left bottom;
  @media (max-width: 400px) {
    right: 20.5%;
  }
`;
const LeftLeg = styled.div`
  width: 16%;
  right: 34%;
  height: 10px;
  top: 57%;
  background-color: white;
  position: absolute;
  rotate: -60deg;
  transform-origin: right bottom;
`;
// end of body parts style

/* Connect styled html part to variables */
const HEAD = <Head key={"head"} />;
const BODY = <Body key={"body"} />;
const RIGHT_ARM = <RightArm key={"rightArm"} />;
const LEFT_ARM = <LeftArm key={"leftArm"} />;
const RIGHT_LEG = <RigthLeg key={"rightLeg"} />;
const LEFT_LEG = <LeftLeg key={"leftLeg"} />;
const Body_Parts = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numbOfGuesses: number;
};

const HangmanDrawing = ({ numbOfGuesses }: HangmanDrawingProps) => {
  return (
    <DrawingWrapper>
      {Body_Parts.slice(0, numbOfGuesses)}
      <TopLeftDiv />
      <TopDiv />
      <LongDiv />
      <BottomDiv />
    </DrawingWrapper>
  );
};

export default HangmanDrawing;
