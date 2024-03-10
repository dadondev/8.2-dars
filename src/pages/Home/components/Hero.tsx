import styled from "styled-components";
import Container from "../../../general/components/Container";
import Title from "../../../general/components/Title";
import Paragraph from "../../../general/components/Paragraph";
import Button from "../../../general/components/Button";

const StyledContainer = styled(Container)`
  padding-top: 67px;
  padding-bottom: 168px;
`;

const Div = styled.div`
  padding-left: 24px;
  margin-bottom: 61px;
`;

const Content = styled.div`
  display: grid;
  justify-content: center;
  padding-inline: 24px;
`;

const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 15px;
`;

const StyledParagraph = styled(Paragraph)`
  text-align: center;
  margin-bottom: 32px;
`;

const Hero = () => {
  return (
    <StyledContainer>
      <Div>
        <img src="/bg-img.png" alt="image" />
      </Div>
      <Content>
        <StyledTitle isSmall={false}>More than just shorter links</StyledTitle>
        <StyledParagraph>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </StyledParagraph>
        <Button>Get Started</Button>
      </Content>
    </StyledContainer>
  );
};

export default Hero;
