import styled from "styled-components";
import InPut from "./InPut";
import { useState } from "react";
import Rectangular from "../../../general/components/Rectangular";

interface Err {
  err: boolean;
}

const StyledForm = styled.form`
  border-radius: 10px;
  transform: translateY(-50%);
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

interface Dat {
  "Content-Type": string;
  apikey: string;
}

const Form = () => {
  const [data, setData] = useState();
  const handleSubmit = async () => {
    const base = "https://api.rebrandly.com/v1/links";
    if (link) {
      setErr(false);
      const req = await fetch(
        {
          "Content-Type": "application/json",
          apikey: "0efffe4461ed4fe5a4796493c9f1b104",
        },
        "post"
      );
      const res = await req.json();
      console.log(res);
      return "helloo";
    }
  };
  const [link, setLink] = useState<string>("");
  const [err, setErr] = useState<boolean>(false);
  return (
    <StyledForm
      onSubmit={(e) => {
        handleSubmit();
        e.preventDefault();
      }}
    >
      <InPut setState={setLink} />
      <Span err={err} onClick={() => setErr(true)}>
        Please add a link
      </Span>
      <Rectangular type="submit">Shorten It!</Rectangular>
    </StyledForm>
  );
};

export default Form;
