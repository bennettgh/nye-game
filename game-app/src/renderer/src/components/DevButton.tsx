import styled from 'styled-components'

const Button = styled.button`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  top: 10px;
  right: 10px;
`

export const DevButton = ({
  children,
  onClick
}: {
  children: React.ReactNode
  onClick: () => void
}) => {
  return <Button onClick={onClick}>{children}</Button>
}
