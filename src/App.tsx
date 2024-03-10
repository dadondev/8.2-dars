import styled, { ThemeProvider } from "styled-components";
import Container from "./general/components/Container";
import Home from "./pages/Home/Home";
import GlobalStyles from "./general/utils/GlobalStyle";
import theme from "./general/utils/theme";

const StyledContainer = styled(Container)`
  /* color: red; */
  /* padding-inline: 24px; */
  height: 100%;

  /* background: url("/bg-image.png") no-repeat top 96px right 0; */
`;

const App = () => {
  return (
    <StyledContainer>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </StyledContainer>
  );
};

export default App;
