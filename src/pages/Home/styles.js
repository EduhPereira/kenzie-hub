import styled, { keyframes } from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
`;
const appear = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
export const Icon = styled.div`
  font-size: 75px;
  display: flex;
  justify-content: center;
  animation: ${appear} 1s;
`;
export const Content = styled.div`
  max-width: 400px;
  h1 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 2.5rem;
    span {
      color: #c85311;
    }
  }
  div {
    flex: 1;
    display: flex;
    margin-top: 1rem;

    button + button {
      margin-left: 1rem;
    }
  }
  span {
    margin-bottom: 2rem;
    font-size: 1.8rem;
    flex-wrap: wrap;
  }
`;
