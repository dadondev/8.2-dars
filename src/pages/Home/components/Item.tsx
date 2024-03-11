import styled from "styled-components";
import Rectangular from "../../../general/components/Rectangular";
import { useState } from "react";

const Div = styled.div`
  padding: 6px 15px 16px;
  border-radius: 5px;
  background: #fff;
`;

const P = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: 1.6rem;
  border-bottom: 1px solid #9e9aa8;
  padding-bottom: 2px;
  margin-bottom: 2px;
  font-weight: 500;
  line-height: 3.6rem; /* 225% */
  letter-spacing: 0.12px;
`;

const Span = styled.a`
  color: ${(props) => props.theme.colors.cyan};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 36px; /* 225% */
  letter-spacing: 0.12px;
  text-decoration: none;
`;

const Item = () => {
  const [bool, setBool] = useState<boolean>(false);
  const handleClick = () => {
    setBool(!bool);
  };
  return (
    <Div>
      <P>https://www.frontendmentor.io</P>
      <div>
        <Span href="https://rel.ink/k4lKyk">https://rel.ink/k4lKyk</Span>
        <Rectangular active={bool} type="button" onClick={handleClick}>
          {bool ? "copied" : "copy"}
        </Rectangular>
      </div>
    </Div>
  );
};

export default Item;
