import { Header, Button, Form, Container, Card } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

export const Techs = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("@KenzieHub:user"));
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
  const [techs, setTechs] = useState([]);
  const [controler, setControler] = useState(0);

  useEffect(() => {
    api
      .get(`/users/${user.id}`)
      .then((response) => setTechs([...response.data.techs]))
      .catch((e) => console.log(e));
  }, [controler]);

  const schema = yup.object().shape({
    title: yup.string().required("Field Required"),
    status: yup.string().required("Field Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  const handleNavigation = (path) => {
    history.push(path);
  };

  const onSubmitFunction = (data) => {
    api
      .post("users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setControler(controler + 1);
      })
      .then(() => {
        toast.success("Added Technology");
      })
      .catch((e) => {
        toast.error("Technology Already Exists");
      });
  };

  const handleDelete = (id) => {
    api
      .delete(`users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setControler(controler + 1);
      })
      .then(() => {
        toast.success("Deleted Technology");
      })
      .catch((e) => {
        toast.error("Technology Cannot be Deleted");
      });
  };

  return (
    <>
      <Header>
        <Button onClick={() => handleNavigation("/dashboard")}>
          <FiArrowLeft />
        </Button>
        <h1>{user.name}</h1>
      </Header>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <input type="text" placeholder="Tech" {...register("title")} />
        <select {...register("status")}>
          <option selected value="Iniciante">
            Beginner
          </option>
          <option value="Intermediário">Intermediary</option>
          <option value="Avançado">Advanced</option>
        </select>
        <Button type="submit">Add</Button>
      </Form>
      <Container>
        {techs.map((tech) => (
          <Card>
            <h2>{tech.title}</h2>
            <div>{tech.status}</div>
            <Button onClick={() => handleDelete(tech.id)}>remove</Button>
          </Card>
        ))}
      </Container>
    </>
  );
};
