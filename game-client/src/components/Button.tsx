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
  background: #fff;
`;

export const Button = ({
  children,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  props?: any;
}) => {
  return (
    <ButtonContainer onClick={onClick} {...props}>
      {children}
    </ButtonContainer>
  );
};
