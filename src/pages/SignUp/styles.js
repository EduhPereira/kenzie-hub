import styled, { keyframes } from "styled-components";
import SignupImage from "../../assets/sapiens1.svg";
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;
export const Background = styled.div`
  @media (min-width: 1024px) {
    flex: 1;
    background: url(${SignupImage}) no-repeat center, var(--darkblue);
    background-size: contain;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
    from{
        opacity:0;
        transform: translate(50px)
    }
    to{
        opacity: 1;
        transform: translate(0px)
    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 16px;
    }

    > div {
      margin-top: 5px;
    }

    p {
      margin-top: 8px;

      a {
        font-weight: bold;
        color: var(--blue);
      }
    }

    label {
      display: flex;
      margin: 8px 0 0 0;
    }

    select {
      display: flex;
      width: 100%;
      padding: 8px;
      margin: 0 0 10px 0;
      border: 2px solid var(--gray);
      border-radius: 10px;
      font-family: "Roboto Mono", monospace;
    }
  }
`;
