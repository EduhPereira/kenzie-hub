import styled from "styled-components";
export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  color: var(--white);
  background-color: var(--darkblue);

  h1 {
    font-size: 1rem;
  }

  svg {
    font-size: 1.5rem;
  }

  button {
    margin-right: 15px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: var(--white);
  border: 2px solid var(--white);
  border-radius: 5px;
  margin-left: 15px;
  padding: 3px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin: 32px 0;

  input {
    border-radius: 5px;
    width: 150px;
    border: 1px solid var(--gray);
    margin-right: 5px;
    padding: 5px;
    font-size: 16px;
    font-family: "Roboto Mono", monospace;
  }

  select {
    width: 120px;
    border-radius: 5px;
    margin-right: 5px;
    padding: 5px;
    font-family: "Roboto Mono", monospace;
  }

  button {
    background-color: var(--darkblue);
    padding: 5px 10px;
    margin: 0;
    font-family: "Roboto Mono", monospace;
    transition: 0.25s linear;
    :hover {
      background-color: var(--blue);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 15px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 200px;
  background-color: #ddddddeb;
  text-align: center;
  border-radius: 5px;
  font-family: "Roboto Mono", monospace;

  box-shadow: 12px 11px 10px -1px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 12px 11px 10px -1px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 12px 11px 10px -1px rgba(0, 0, 0, 0.6);
  button {
    margin: 10px 0;
    width: 70%;
    background-color: var(--darkblue);
    padding: 5px 10px;
    font-family: "Roboto Mono", monospace;
    transition: 0.25s linear;
    :hover {
      background-color: var(--blue);
    }
  }
`;
