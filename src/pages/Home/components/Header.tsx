import styled from "styled-components";
import ListLinks from "./ListLinks";
import { useState } from "react";

const StyledHeader = styled.header`
  margin: 0 auto;
  padding-inline: 24px;
  min-width: 100%;
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: white;
  align-items: center;
`;

const Button = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  width: auto;
`;

const Header = () => {
  const [bool, setBool] = useState(false);
  return (
    <StyledHeader>
      <a href="/">
        <img src="/logo.svg" alt="logo" />
      </a>
      <Button onClick={() => setBool(!bool)}>
        <img src="/icon-menu.svg" alt="icon-menu" />
      </Button>
      <ListLinks active={bool} />
    </StyledHeader>
  );
};

export default Header;
