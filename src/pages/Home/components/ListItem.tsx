import styled from "styled-components";
import Item from "./Item";

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ListItem = () => {
  return (
    <List>
      <Item />
    </List>
  );
};

export default ListItem;
