import styled from "styled-components";
import Container from "../../general/components/Container";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";

const StyledContainer = styled(Container)`
  padding-block: 40px;
  height: 100%;
  width: 100%;
`;

const Home = () => {
  return (
    <StyledContainer>
      <Header />
      <Hero />
      <Main />
    </StyledContainer>
  );
};

export default Home;
