import React from "react";
import styled from "styled-components";

interface IProp {
  checked: boolean;
  title: string;
  content: string;
}

const TodoContent = (prop: IProp) => {
  const { checked, title, content } = prop;

  return (
    <ContentContainer checked={checked}>
      <div>{title}</div>
      <article>{content}</article>
    </ContentContainer>
  );
};

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

  article {
    line-height: 24px;
  }
`;

export default TodoContent