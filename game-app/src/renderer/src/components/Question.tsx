import styled from 'styled-components'

const QuestionContainer = styled.p<{ fontsize: number }>`
  font-size: ${(props) => props.fontsize}px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
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

  return <QuestionContainer fontsize={fontsize}>{text}</QuestionContainer>
}
