import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react";

import TodoStore from "../store/TodoStore";
import TodoItem from "./TodoItem";

const TodoItemList = () => {
  const todoList = TodoStore.instance.getTodoList;

  return (
    <div>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default observer(TodoItemList);
