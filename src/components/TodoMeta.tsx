import React from "react";
import styled from "styled-components";
import { AiFillPushpin, AiOutlinePushpin } from "react-icons/ai";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { observer } from "mobx-react";

import TodoStore from "../store/TodoStore";

interface IProp {
  id: string;
  pinned: boolean;
  checked: boolean;
}

const TodoMeta = (prop: IProp) => {
  const { id, pinned, checked } = prop;

  return (
    <MetaContainer>
      <PinIcon
        onClick={() =>
          TodoStore.instance.changeTodoState({ id, pinned: !pinned })
        }
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
  );
};

const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-top: 3px;

  align-items: center;
`;

const PinIcon = styled.div`
  margin-left: 2px;

  svg {
    width: 23px;
    height: 23px;
  }
`;

const CheckIcon = styled.div`
  margin-top: 3px;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export default observer(TodoMeta);
