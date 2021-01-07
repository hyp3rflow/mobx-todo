import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import TodoStore, { ITodo } from "../store/TodoStore";
import TodoItem from "./TodoItem";
import { autorun } from "mobx";

const TodoItemList = () => {
  const todoList = TodoStore.instance.getTodoList;
  const [tempList, setTempList] = useState<ITodo[]>([]);

  useEffect(
    () =>
      autorun(() => {
        setTempList(
          todoList.slice().sort((a, b) => {
            if (a.pinned && !b.pinned) return -1;
            else if (!a.pinned && b.pinned) return 1;
            else return 0;
          })
        );
      }),
    []
  );

  return (
    <Container>
      {tempList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: 30px auto;
  width: 500px;
  min-height: 200px;

  display: flex;
  flex-direction: column;

  border-radius: 15px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
`;

export default observer(TodoItemList);
