import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Header, Button, Container, Card } from "./styles";
import { CgLogOff } from "react-icons/cg";
import Profile from "../../assets/profile.svg";
import Techs from "../../assets/techs.svg";

export const Dashboard = ({ authenticated, setAuthenticated }) => {
  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));

  const logoff = () => {
    localStorage.clear();
    return <Redirect to="/login" />;
  };

  return (
    <>
      <Header>
        <h1>{user.name}</h1>{" "}
        <Button onClick={logoff}>
          <CgLogOff />
        </Button>
      </Header>
      <Container>
        <Card>
          <img src={Profile} alt="" />
          <h2>Profile</h2>
          <Button>See More</Button>
        </Card>
        <Card>
          <img src={Techs} alt="" />
          <h2>Techs / Projects</h2>
          <Button>See More</Button>
        </Card>
      </Container>
    </>
  );
};
