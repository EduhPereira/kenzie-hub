import { Container, Background, Content, AnimationContainer } from "./styles";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

export const SignUp = () => {
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form>
            <h1>Sign Up</h1>
            <Input icon={FiUser} label="Name" placeholder="Insert your Name" />
            <Input
              icon={FiMail}
              label="Email"
              placeholder="Insert your Email"
            />
            <Input
              icon={FiLock}
              type="password"
              label="Password"
              placeholder="Insert your Password"
            />
            <Input
              icon={FiLock}
              type="password"
              label="Confirm Password"
              placeholder="Confirm the Password"
            />
            <Button>Send</Button>
            <p>
              Already have an acount? <Link to="/link">Sign in</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
