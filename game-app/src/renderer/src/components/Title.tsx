import styled from 'styled-components'

const StyledTitle = styled.h1<{ fontSize?: string }>`
  font-size: ${(props) => props.fontSize || '3rem'};
  font-weight: bold;
  font-family: 'Arvo', sans-serif;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  line-height: 1.2;
`

export const Title = ({ children, fontSize }: { children: React.ReactNode; fontSize?: string }) => {
  return <StyledTitle fontSize={fontSize}>{children}</StyledTitle>
}
