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
    background: url(${SignupImage}) no-repeat center, black;
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
      margin-bottom: 32px;
    }

    p {
      margin-top: 8px;

      a {
        font-weight: bold;
        color: var(--orange);
      }
    }
  }
`;
