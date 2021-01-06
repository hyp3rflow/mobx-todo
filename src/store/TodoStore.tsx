import { makeAutoObservable } from "mobx";

export interface ITodo {
  id: string;
  title: string;
  content: string;
  pinned: boolean;
  checked: boolean;
}

interface IState {
  id: string;
  pinned?: boolean;
  checked?: boolean;
}

class TodoStore {
  private static _instance: TodoStore;
  todoList: ITodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  static get instance() {
    if (!this._instance) this._instance = new TodoStore();

    return this._instance;
  }

  set changeTodoState(state: IState) {
    const idx = this.todoList.findIndex((todoItem) => todoItem.id === state.id);
    this.todoList[idx] = {
      ...this.todoList[idx],
      ...state,
    };
  }

  set pushTodo(todo: ITodo) {
    this.todoList.push(todo);
  }

  set deleteTodo(id: string) {
    const idx = this.todoList.findIndex((todoItem) => todoItem.id === id);
    this.todoList = this.todoList.splice(idx, 1);
  }

  get getTodoList() {
    return this.todoList;
  }
}

export default TodoStore;
