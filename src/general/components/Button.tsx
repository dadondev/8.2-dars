import React from "react";
import styled from "styled-components";
interface Props {
  className?: string;
  children: React.ReactNode;
}

const StyledButton = styled.button`
  display: inline-block;
  width: auto;
  height: auto;
  border-radius: 28px;
  background: ${(props) => props.theme.colors.cyan};
  padding: 14px 40px 12px;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  transition: all 300ms;
  color: #fff;
  font-size: 2rem;
  font-weight: 700;

  &:hover {
    background-color: ${(props) => props.theme.colors.hover};
  }
`;

const Button: React.FC<Props> = ({ children, className }) => {
  return <StyledButton className={className}>{children}</StyledButton>;
};

export default Button;
