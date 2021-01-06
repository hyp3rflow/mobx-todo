import React from "react";
import styled from "styled-components";
import { ITodo } from "../store/TodoStore";

interface IProp {
  todo: ITodo;
}

const TodoItem = ({ todo }: IProp) => {
  const { id, title, content, pinned, checked } = todo;

  return (
    <div>
      <div>{title}</div>
      <article>{content}</article>
    </div>
  );
};

export default TodoItem;
