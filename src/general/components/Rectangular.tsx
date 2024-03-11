import React from "react";
import styled, { css } from "styled-components";

interface Props {
  className?: string;
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  onClick?: any;
  active?: boolean;
}

interface Btn {
  active?: boolean;
}

const StyledBtn = styled.button<Btn>`
  min-width: 100%;
  padding-block: 10px 11px;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  transition: 500ms all;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  ${(props) => {
    if (props.active) {
      return css`
        background-color: ${(props) => props.theme.colors.purple};
      `;
    } else {
      return css`
        background: ${(props) => props.theme.colors.cyan};
      `;
    }
  }}
`;

const Rectangular: React.FC<Props> = ({
  className,
  children,
  type,
  onClick,
  active,
}) => {
  return (
    <StyledBtn
      active={active}
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </StyledBtn>
  );
};

export default Rectangular;
