import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
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

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 80vh;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Card = styled.div`
  height: 400px;
  width: 280px;
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: none;
  border-radius: 5px;
  background-color: #137ffb83;
  color: var(--white);
  transition: all 0.25s ease-in;

  box-shadow: 12px 12px 14px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 12px 12px 14px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 12px 12px 14px 0px rgba(0, 0, 0, 0.75);

  :hover {
    transform: scale(1.05);
  }

  img {
    height: 200px;
  }

  button {
    background-color: var(--darkblue);
    border: none;
    padding: 5px;
    width: 60%;
    font-weight: 700;
    margin: 15px 0 0 0;
    transition: 0.3s linear;

    :hover {
      background-color: var(--blue);
    }
  }
`;
