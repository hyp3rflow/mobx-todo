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

    setTodoTitle("");
    setTodoContent("");
    todoStore.pushTodo(todoObject);
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
  border-radius: 15px;
  background: #ffffff;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;

  display: flex;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 20px;
`;

const TitleInput = styled.input`
  font-size: 20px;
  margin-bottom: 10px;

  padding: 10px;

  border-radius: 10px;
  background: #ffffff;
  box-shadow: 10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff;
`;

const ContentInput = styled.input`
  font-size: 16px;

  padding: 10px;

  border-radius: 10px;
  background: #ffffff;
  box-shadow: 10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff;
`;

const AddButton = styled.button`
  width: 80px;
  border-radius: 10px;

  font-size: 16px;
  background-color: limegreen;
  font-weight: 600;
  color: white;

  box-shadow: 10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff;

  &:hover {
    background-color: white;
    color: limegreen;
    border: 2px solid limegreen;
  }
`;

export default observer(AddTodo);
