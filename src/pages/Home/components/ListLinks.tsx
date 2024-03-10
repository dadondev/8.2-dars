import React from "react";
import styled, { css } from "styled-components";

interface Props {
  active?: boolean;
}

const Container = styled.div<Props>`
  transition: all 500ms;
  ${(props) => {
    if (props.active) {
      return css`
        transform: scaleY(100%);
      `;
    } else {
      return css`
        transform: scaleY(0);
      `;
    }
  }}
  z-index:100;
  position: absolute;
  left: 50%;
  translate: -50%;
  top: 43px;
  width: 328px;
  margin: 0 auto;
  font-weight: 700;
  border-radius: 10px;
  color: white;
  padding-block: 40px;
  max-width: 100%;
  padding-inline: 24px;
  text-transform: capitalize;
  background-color: ${(props) => props.theme.colors.darkPurple};
`;

const List = styled.ul`
  padding: 0;
  display: grid;
  justify-content: center;
  list-style: none;
  text-align: center;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  grid-row-gap: 30px;

  & > li {
    cursor: pointer;
    font-size: 1.8rem;
  }
`;

const Article = styled.article`
  display: grid;
  grid-row-gap: 24px;
  &:has(span, p) {
    font-size: 1.8rem;
    cursor: pointer;
    text-align: center;
  }
  & > p {
    background-color: ${(props) => props.theme.colors.cyan};
    border-radius: 28px;
    padding: 12px 0 9px;
  }
`;

const ListLinks: React.FC<Props> = ({ active }) => {
  return (
    <Container active={active}>
      <List>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </List>
      <Article>
        <span>login</span>
        <p>sing up</p>
      </Article>
    </Container>
  );
};

export default ListLinks;
