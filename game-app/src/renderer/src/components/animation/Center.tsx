import styled from 'styled-components'

const StagingCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AnimationCenter = ({ children }: { children: React.ReactNode }) => {
  return <StagingCenter>{children}</StagingCenter>
}
