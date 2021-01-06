import React, { useState } from "react";
import styled from "styled-components";
import { observer } from "mobx-react";
import TodoStore, { ITodo } from "store/TodoStore";
import { nanoid } from "nanoid";

const AddTodo = () => {
  const todoStore = TodoStore.instance;
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  const submit = () => {
    const todoObject: ITodo = {
      id: nanoid(),
      title: todoTitle,
      content: todoContent,
      checked: false,
      pinned: false,
    };

    todoStore.pushTodo = todoObject;
  };

  return (
    <Container>
      <InputContainer>
        <TitleInput
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
        <ContentInput
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
          placeholder="내용을 입력하세요"
        />
      </InputContainer>
      <AddButton onClick={submit}>Add</AddButton>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  border: 1px solid #888;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 10px 10px 20px #d9d9d9;

  display: flex;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleInput = styled.input`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ContentInput = styled.input`
  font-size: 20px;
`;

const AddButton = styled.button`
  width: 80px;
  border-radius: 10px;

  font-size: 16px;
  background-color: limegreen;
  font-weight: 600;
  color: white;

  &:hover {
    background-color: white;
    color: limegreen;
    border: 2px solid limegreen;
  }
`;

export default observer(AddTodo);
