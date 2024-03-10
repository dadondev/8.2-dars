import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const StyledParagraph = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 3rem; /* 166.667% */
  letter-spacing: 0.123px;
`;

const Paragraph: React.FC<Props> = ({ className, children }) => {
  return <StyledParagraph className={className}>{children}</StyledParagraph>;
};

export default Paragraph;
