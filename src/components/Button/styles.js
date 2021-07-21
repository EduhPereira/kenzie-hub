import styled from "styled-components";
export const Container = styled.button`
  background-color: ${(props) => (props.whiteSchema ? "#f5f5f5" : "#0c0d0d")};
  color: ${(props) => (props.whiteSchema ? "#0c0d0d" : "#f5f5f5")};
  height: 45px;
  border-radius: 8px;
  border: 2px solid var(--black);
  font-family: "Roboto Mono", monospace;
  margin-top: 16px;
  width: 100%;
  transition: 0.5s;
  :hover {
    border: 2px solid #c85311;
  }
`;
