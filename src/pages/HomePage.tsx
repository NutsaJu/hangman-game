import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>HangMan Game</Title>
        <ChooseLang>Choose Language To Start Game</ChooseLang>
        <LangWrapper>
          <NavLink to="/eng" style={{ textDecoration: "none" }}>
            <Button variant="contained">English</Button>
          </NavLink>
          <NavLink to="/ka" style={{ textDecoration: "none" }}>
            <Button variant="contained">ქართული</Button>
          </NavLink>
        </LangWrapper>
      </Wrapper>
    </Container>
  );
};

export default HomePage;

// styles for home page
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const LangWrapper = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 50px;
  font-family: monospace;
  font-weight: bold;
  color: white;
`;

const ChooseLang = styled.div`
  font-size: 40px;
  font-family: monospace;
  font-weight: bold;
  background: -webkit-linear-gradient(#c78283, #f3d9dc);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;
