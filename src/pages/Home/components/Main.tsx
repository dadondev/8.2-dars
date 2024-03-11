import styled from "styled-components";
import Container from "../../../general/components/Container";
import Form from "./Form";
import ListItem from "./ListItem";
import Adven from "./Adven";

const StyledMain = styled.main`
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  height: auto;
  padding-inline: 24px;
  width: 100%;
`;

const StyledContainer = styled(Container)`
  position: relative;
  height: auto;
  background-color: ${(props) => props.theme.colors.white};
  /* padding-top: 126px; */
  /* padding-inline: 24px; */
`;

const Main = () => {
  return (
    <StyledMain>
      <StyledContainer>
        <Form />
        <ListItem />
        <Adven />
      </StyledContainer>
    </StyledMain>
  );
};

export default Main;
