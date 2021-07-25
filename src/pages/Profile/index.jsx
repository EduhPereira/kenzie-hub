import { Redirect } from "react-router";
import { useHistory } from "react-router-dom";
import { Header, Container, Button, Card, Content, Item } from "./styles";
import { FiArrowRight } from "react-icons/fi";
import api from "../../services/api";
import { useEffect, useState } from "react";
export const Profile = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    api
      .get(`/users/${user.id}`)
      .then((response) => setTechs([...response.data.techs]))
      .catch((e) => console.log(e));
  }, []);

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  const handleNavigation = (path) => {
    history.push(path);
  };

  return (
    <>
      <Header>
        <h1>{user.name}</h1>
        <Button onClick={() => handleNavigation("/dashboard")}>
          <FiArrowRight />
        </Button>
      </Header>
      <Container>
        <Card>
          <Content>
            {user.avatar_url ? (
              <img src={user.avatar_url} alt="profile avatar" />
            ) : (
              <img
                src="https://www.seekpng.com/png/detail/133-1334822_default-staff-image-person-icon.png"
                alt="profile avatar"
              />
            )}
            <h2>{user.name}</h2>
            <Item>
              <span>Email</span>
              <div>{user.email}</div>
            </Item>
            <Item>
              <span>Module</span>
              <div>{user.course_module}</div>
            </Item>
            <Item>
              <span>Contact</span>
              <div>{user.contact}</div>
            </Item>
            <Item>
              <span>Bio</span>
              <div>{user.bio}</div>
            </Item>
            <h2>Technologies</h2>
            {techs.map((tech) => (
              <Item>
                <span>{tech.title}</span>
                <div>{tech.status}</div>
              </Item>
            ))}
          </Content>
        </Card>
      </Container>
    </>
  );
};
