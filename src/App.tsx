import React from "react";
import styled from "styled-components";

import TodoItemList from "components/TodoItemList";
import AddTodo from "components/AddTodo";

const App = () => {
  return (
    <TopLayout>
      <TitleLayout>
        <Title>Todo App</Title>
        <AddTodo />
      </TitleLayout>
      <ItemContainer>
        <TodoItemList />
      </ItemContainer>
    </TopLayout>
  );
};

const Title = styled.h1`
  z-index: 20;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopLayout = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export default App;
