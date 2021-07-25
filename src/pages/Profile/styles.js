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

  button {
    margin-left: 15px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0;
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

export const Card = styled.div`
  min-height: 400px;
  width: 85%;
  max-width: 500px;
  margin: 50px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border: 1px solid var(--gray);
  border-radius: 5px;
  background: rgb(236, 236, 236);
  color: var(--white);

  box-shadow: 12px 12px 14px 0px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 12px 12px 14px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 12px 12px 14px 0px rgba(0, 0, 0, 0.75);

  h2 {
    font-size: 1.5rem;
    text-align: center;
    margin: 10px;
    font-weight: 700;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #1b1b1b;
  font-family: "Roboto Mono", monospace;

  img {
    height: 150px;
    width: 150px;
    border-radius: 100%;
    margin: 0 auto;
  }

  h2 {
    font-size: 20px;
    color: goldenrod;
    margin: 10px 0;
  }
`;
export const Item = styled.div`
  font-size: 1rem;
  margin: 8px 0;

  span {
    font-weight: 900;
  }
`;
