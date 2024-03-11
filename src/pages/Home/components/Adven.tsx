import styled from "styled-components";
import Title from "../../../general/components/Title";
import Paragraph from "../../../general/components/Paragraph";
import Card from "./Card";

const Div = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

const Content = styled.div`
  display: grid;
  margin-bottom: 92px;
  gap: 16px;
  text-align: center;
`;

const Cards = styled.div`
  display: grid;
  justify-content: center;
  gap: 92px;
`;

const datas = [
  {
    icon: "/icon-stas.png",
    title: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    icon: "/icon-speed.png",
    title: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    icon: "/icon-art.png",
    title: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const Adven = () => {
  return (
    <Div>
      <Content>
        <Title isSmall={true}>Advanced Statistics</Title>
        <Paragraph>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </Paragraph>
      </Content>
      <Cards>
        {datas.map((e, i) => (
          <Card key={i} icon={e.icon} title={e.title} text={e.text} />
        ))}
      </Cards>
    </Div>
  );
};

export default Adven;
