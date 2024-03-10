import styled from "styled-components";
import InPut from "./InPut";
import { useState } from "react";
import Rectangular from "../../../general/components/Rectangular";

interface Err {
  err: boolean;
}

const StyledForm = styled.form`
  top: -50%;
  position: absolute;
  border-radius: 10px;
  background: url("/form-bg.png") no-repeat;
  background-size: cover;
  display: grid;
  gap: 20px;
  width: 100%;
  /* background: #3a3054; */
  padding: 24px;
`;

const Span = styled.span<Err>`
  top: 50;
  display: ${(props) => {
    if (props.err) {
      return "block";
    } else {
      return "none";
    }
  }};
  transform: translateY(50%);
  left: 24px;
  position: absolute;
  color: "#f46363";
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 500;
  line-height: 1.8rem; /* 150% */
  letter-spacing: 0.082px;
`;

const Form = () => {
  const [link, setLink] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);
  let links = link;
  let erre = err;
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <InPut setState={setLink} />
      <Span err={err}>Please add a link</Span>
      <Rectangular type="submit">Shorten It!</Rectangular>
    </StyledForm>
  );
};

export default Form;
