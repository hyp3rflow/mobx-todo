import React from "react";
import styled from "styled-components";
import TodoStore, { ITodo } from "../store/TodoStore";
import { AiFillPushpin, AiOutlinePushpin } from "react-icons/ai";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { GrClose } from "react-icons/gr";
import { action } from "mobx";

interface IProp {
  todo: ITodo;
}

const TodoItem = ({ todo }: IProp) => {
  const { id, title, content, pinned, checked } = todo;

  return (
    <Container>
      <MetaContainer>
        <PinIcon
          onClick={action(() =>
            TodoStore.instance.changeTodoState({ id, pinned: !pinned })
          )}
        >
          {pinned ? <AiFillPushpin /> : <AiOutlinePushpin />}
        </PinIcon>
        <CheckIcon
          onClick={() =>
            TodoStore.instance.changeTodoState({ id, checked: !checked })
          }
        >
          {checked ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </CheckIcon>
      </MetaContainer>
      <ContentContainer checked={checked}>
        <div>{title}</div>
        <article>{content}</article>
      </ContentContainer>
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

const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-top: 3px;

  align-items: center;
`;

interface ContentContainerProp {
  checked: boolean;
}

const ContentContainer = styled.div<ContentContainerProp>`
  display: flex;
  flex-direction: column;

  div {
    line-height: 30px;
    text-decoration-line: ${(p) => (p.checked ? "line-through" : "none")};
    font-size: 20px;
    font-weight: 600;
  }
`;

const PinIcon = styled.div`
  margin-left: 2px;

  svg {
    width: 23px;
    height: 23px;
  }
`;

const CheckIcon = styled.div`
  svg {
    width: 18px;
    height: 18px;
  }
`;

const CloseContainer = styled.div`
  margin-left: auto;
`;

export default TodoItem;
