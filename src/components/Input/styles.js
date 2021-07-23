import styled from "styled-components";
import { css } from "styled-components";
export const Container = styled.div`
  text-align: left;
  div {
    span {
      color: var(--red);
    }
  }
`;
export const InputContainer = styled.div`
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--gray);
  padding: 0.5rem;
  width: 100%;
  display: flex;
  transition: 0.4s;

  input {
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--black);
    &::placeholder {
      color: var(--gray);
    }
  }

  svg {
    margin-right: 16px;
  }
`;
