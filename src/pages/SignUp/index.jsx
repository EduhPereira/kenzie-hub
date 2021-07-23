import { Container, Background, Content, AnimationContainer } from "./styles";
import { Button } from "../../components/Button";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Input } from "../../components/Input";
import {
  FiUser,
  FiMail,
  FiLock,
  FiLinkedin,
  FiAward,
  FiPenTool,
} from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

export const SignUp = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    email: yup.string().email("Invalid Email").required("Field Required"),
    password: yup
      .string()
      .min(8, "Minimun of 8 digits")
      .required("Field Required"),
    passwordConfirm: yup
      .string()
      .required("Field Required")
      .oneOf([yup.ref("password"), null], "The passwords do not match"),
    name: yup.string().required("Field Required"),
    bio: yup.string().required("Field Required"),
    contact: yup.string().required("Field Required"),
    course_module: yup.string().required("Field Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = ({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  }) => {
    const user = { email, password, name, bio, contact, course_module };
    api
      .post("/users", user)
      .then((_) => {
        toast.success("Account Created Successfully");
        return history.push("/login");
      })
      .catch((err) => toast.error("Failed to Create Account"));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Sign Up</h1>
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
            <Input
              register={register}
              name="passwordConfirm"
              icon={FiLock}
              type="password"
              label="Confirm your Password"
              placeholder="Confirm your Password"
              error={errors.passwordConfirm?.message}
            />
            <Input
              register={register}
              name="name"
              icon={FiUser}
              label="Name"
              placeholder="Insert your Name"
              error={errors.name?.message}
            />
            <Input
              register={register}
              name="bio"
              icon={FiPenTool}
              label="Bio"
              placeholder="Insert your Bio"
              error={errors.bio?.message}
            />
            <Input
              register={register}
              name="contact"
              icon={FiLinkedin}
              label="Contact"
              placeholder="Social Media / Cellphone"
              error={errors.contact?.message}
            />
            <Input
              register={register}
              name="course_module"
              icon={FiAward}
              label="Course Module"
              placeholder="Insert your course module"
              error={errors.course_module?.message}
            />
            <Button type="submit">Send</Button>
            <p>
              Already have an acount? <Link to="/login">Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
