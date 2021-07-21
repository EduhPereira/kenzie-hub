import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container, Content } from "./styles";
export const Home = () => {
  const history = useHistory();
  const handleNavigation = (path) => {
    history.push(path);
  };
  return (
    <Container>
      <Content>
        <h1>
          do<span>.</span>it
        </h1>
        <span>Organize Yourself Easily and Effectively</span>
        <div>
          <Button onClick={() => handleNavigation("/signup")} whiteSchema>
            Sign Up
          </Button>
          <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
};
