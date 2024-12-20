import styled from "styled-components";

const ButtonContainer = styled.button`
  font-family: "Arvo";
  font-weight: 800;
  font-style: normal;
  display: block;
  border-radius: 6px;
  border: unset;
  border: 1px solid #000;
  padding: 3px 20px;
`;

export const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};
