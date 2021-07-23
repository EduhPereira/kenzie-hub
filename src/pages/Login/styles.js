import styled, { keyframes } from "styled-components";
import SignupImage from "../../assets/sapiens2.svg";
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

const appearFromLeft = keyframes`
    from{
        opacity:0;
        transform: translateX(-50px)
    }
    to{
        opacity: 1;
        transform: translateX(0px)
    }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 32px;
    }

    > div {
      margin-top: 16px;
    }

    p {
      margin-top: 8px;

      a {
        font-weight: bold;
        color: var(--blue);
      }
    }
  }
`;
