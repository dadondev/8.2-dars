import styled from "styled-components";
import Title from "../../../general/components/Title";
import Paragraph from "../../../general/components/Paragraph";
import React from "react";

interface Props {
  icon: string;
  title: string;
  text: string;
}

const StyledCard = styled.div`
  border-radius: 5px;
  background: #fff;
  max-width: 327px;
  position: relative;
  padding: 77px 32px 32px;
  text-align: center;
`;
const Img = styled.img`
  position: absolute;
  /* top: -50%; */
  transform: translate(-50%, -120px);
  left: 50%;
  width: 88px;
`;

const Card: React.FC<Props> = ({ icon, title, text }) => {
  return (
    <StyledCard>
      <Img src={icon} alt="icon" />
      <Title isSmall={true}>{title}</Title>
      <Paragraph>{text}</Paragraph>
    </StyledCard>
  );
};

export default Card;
