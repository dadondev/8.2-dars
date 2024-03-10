import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children?: React.ReactNode;
}
const StyledContainer = styled.div`
  max-width: 100%;
  width: 100%;
  margin-block: auto;
`;

const Container: React.FC<Props> = ({ children, className }) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
