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

const initializeStore: ITodo[] = [
  {
    id: "323123",
    title: "Todo App 만들기",
    content: "React + Typescript + MobX",
    pinned: false,
    checked: false,
  },
  {
    id: "123213",
    title: "유튜브 보기",
    content: "심심해",
    pinned: true,
    checked: false,
  },
  {
    id: "234324",
    title: "디자인 시스템 만들기",
    content: "Storybook",
    pinned: false,
    checked: false,
  },
];

class TodoStore {
  private static _instance: TodoStore;
  todoList: ITodo[] = [];

  constructor() {
    makeAutoObservable(this);

    this.todoList = initializeStore;
  }

  static get instance() {
    if (!this._instance) this._instance = new TodoStore();

    return this._instance;
  }

  changeTodoState(state: IState) {
    const idx = this.todoList.findIndex((todoItem) => todoItem.id === state.id);
    this.todoList[idx] = {
      ...this.todoList[idx],
      ...state,
    };
  }

  set pushTodo(todo: ITodo) {
    this.todoList.push(todo);
  }

  deleteTodo(id: string) {
    const idx = this.todoList.findIndex((todoItem) => todoItem.id === id);
    this.todoList.splice(idx, 1);
  }

  get getTodoList() {
    return this.todoList;
  }
}

export default TodoStore;
