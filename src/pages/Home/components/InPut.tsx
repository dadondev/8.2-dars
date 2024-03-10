import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  setState: any;
}

const StyledInput = styled.input`
  border-radius: 5px;
  background: #fff;
  display: flex;
  padding: 6px 16px;
  font-size: 1.6rem;
  height: 48px;
  max-height: 48px;
  min-width: 100%;
  border: none;
  &::placeholder {
    color: #34313d;
    font-size: 1.6rem;
    opacity: 0.5;
    font-weight: 500;
    line-height: 3.6rem; /* 225% */
    letter-spacing: 0.12px;
  }

  /* outline: ; */
`;

const InPut: React.FC<Props> = ({ className, setState }) => {
  const handleChange = (value: string) => {
    setState(value);
  };
  return (
    <StyledInput
      className={className}
      onChange={(e) => {
        handleChange(e!.target!.value);
      }}
      placeholder="Shorten a link here..."
    />
  );
};

export default InPut;
