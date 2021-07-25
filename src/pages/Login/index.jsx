import { Container, Background, Content, AnimationContainer } from "./styles";
import { Button } from "../../components/Button";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Input } from "../../components/Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

export const Login = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("Field Required"),
    password: yup.string().required("Field Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token } = response.data;
        const { user } = response.data;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
        setAuthenticated(true);
      })
      .catch((err) => toast.error("Invalid Email or Password"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>
            <Input
              register={register}
              name="email"
              icon={FiMail}
              label="Email"
              placeholder="Insert your Email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              name="password"
              icon={FiLock}
              type="password"
              label="Password"
              placeholder="Insert your Password"
              error={errors.password?.message}
            />
            <Button type="submit">Login</Button>
            <p>
              Dont have an acount yet? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};
