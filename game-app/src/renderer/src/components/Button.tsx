import styled from 'styled-components'

const ButtonContainer = styled.button`
  font-family: 'Arvo';
  font-weight: 800;
  font-style: normal;
  display: block;
  border-radius: 6px;
  border: unset;
  border: 1px solid #000;
`

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <ButtonContainer>{children}</ButtonContainer>
}
