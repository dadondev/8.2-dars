import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  isSmall: boolean;
  children: React.ReactNode;
}

const StyledTitle = styled.h1<Props>`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => (props.isSmall ? "2.8rem" : "4.2rem")};
  font-weight: 700;
  line-height: 4.8rem;
  letter-spacing: -1.05px;
`;

const Title: React.FC<Props> = ({ className, isSmall, children }) => {
  return (
    <StyledTitle className={className} isSmall={isSmall}>
      {children}
    </StyledTitle>
  );
};

export default Title;
