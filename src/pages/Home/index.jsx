import { useHistory, Redirect } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container, Content, Icon } from "./styles";
import { GiDuck } from "react-icons/gi";
export const Home = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();
  const handleNavigation = (path) => {
    history.push(path);
  };
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <Icon>
          <GiDuck />
        </Icon>
        <h1>kenzie-hub</h1>
        <span>expose your learnings and projects</span>
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
