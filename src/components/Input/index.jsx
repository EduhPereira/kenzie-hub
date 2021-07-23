import { Container, InputContainer } from "./styles";
export const Input = ({
  label,
  icon: Icon,
  register,
  name,
  error,
  ...rest
}) => {
  return (
    <Container>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer>
        {Icon && <Icon size={20} />}
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};
