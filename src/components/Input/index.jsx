import { Container, InputContainer } from "./styles";
export const Input = ({ label, icon: Icon, ...rest }) => {
  return (
    <Container>
      <div>{label}</div>
      <InputContainer>
        {Icon && <Icon />}
        <input {...rest} />
      </InputContainer>
    </Container>
  );
};
