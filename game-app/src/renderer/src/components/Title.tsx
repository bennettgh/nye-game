import styled from 'styled-components'

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: 'Arvo', sans-serif;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
`

export const Title = ({ children }: { children: React.ReactNode }) => {
  return <StyledTitle>{children}</StyledTitle>
}
