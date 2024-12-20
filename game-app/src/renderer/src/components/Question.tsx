import styled from 'styled-components'
import { Title } from './Title'

const StyledQuestion = styled(Title)<{ fontsize: number }>`
  font-size: ${(props) => props.fontsize}px;
`

export const Question = ({
  text,
  isResultsPage
}: {
  text: string
  isResultsPage?: boolean
}): JSX.Element => {
  const textLength = text.length

  let fontsize = 32

  if (textLength > 100) {
    fontsize = 24
  }

  if (isResultsPage) {
    fontsize = fontsize * 0.75
  }

  return <StyledQuestion fontsize={fontsize}>{text}</StyledQuestion>
}
