import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";

import TodoStore, { ITodo } from "../store/TodoStore";
import TodoMeta from "./TodoMeta";
import TodoContent from "./TodoContent";

interface IProp {
  todo: ITodo;
}

const TodoItem = ({ todo }: IProp) => {
  const { id, title, content, pinned, checked } = todo;

  return (
    <Container>
      <TodoMeta id={id} pinned={pinned} checked={checked} />
      <TodoContent checked={checked} title={title} content={content} />
      <CloseContainer onClick={() => TodoStore.instance.deleteTodo(id)}>
        <GrClose />
      </CloseContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  padding: 15px;
  margin: 0px 20px;
  margin-top: 20px;

  border-radius: 15px;
  background: #fff;
  box-shadow: 20px 20px 60px #d3d4d5, -20px -20px 60px #ffffff;

  &:last-child {
    margin-bottom: 20px;
  }
`;

const CloseContainer = styled.div`
  margin-left: auto;
`;

export default TodoItem;
