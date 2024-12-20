import styled from "styled-components";

export const InputContainer = styled.input`
  display: block;
  margin-bottom: 10px;
  font-family: "Arvo";
  font-weight: 800;
  font-style: normal;
  padding: 3px 20px;
  border-radius: 6px;
  border: unset;
  border: 1px solid #000;
`;

export const Input = ({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <InputContainer {...props} />;
};
