import { Redirect, useHistory } from "react-router-dom";
import { Header, Button, Container, Card } from "./styles";
import { CgLogOff } from "react-icons/cg";
import Profile from "../../assets/profile.svg";
import Techs from "../../assets/techs.svg";
import Projects from "../../assets/projects.svg";

export const Dashboard = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));

  const handleNavigation = (path) => {
    history.push(path);
  };

  const handleLogoff = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/login");
  };

  return (
    <>
      <Header>
        <h1>{user.name}</h1>{" "}
        <Button onClick={handleLogoff}>
          <CgLogOff />
        </Button>
      </Header>
      <Container>
        <Card>
          <img src={Profile} alt="" />
          <h2>Profile</h2>
          <Button onClick={() => handleNavigation("/profile")}>See</Button>
        </Card>
        <Card>
          <img src={Projects} alt="" />
          <h2>Techs</h2>
          <Button onClick={() => handleNavigation("/techs")}>
            Add / Remove
          </Button>
        </Card>
      </Container>
    </>
  );
};
