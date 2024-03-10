import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
}

const StyledBtn = styled.button`
  min-width: 100%;
  padding-block: 10px 11px;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.cyan};
`;

const Rectangular: React.FC<Props> = ({ className, children, type }) => {
  return (
    <StyledBtn type={type} className={className}>
      {children}
    </StyledBtn>
  );
};

export default Rectangular;
