import styled from 'styled-components'

export const StripesColored = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      135deg,
      #ffb3ba 0%,
      #ffb3ba 100px,
      #baffc9 100px,
      #baffc9 200px,
      #bae1ff 200px,
      #bae1ff 300px,
      #ffd9ba 300px,
      #ffd9ba 400px,
      #e8baff 400px,
      #e8baff 500px
    );
    background-size: 1000% 200%;
    animation: slideLeft 150s linear infinite;
  }

  @keyframes slideLeft {
    from {
      background-position: 100% 0;
    }
    to {
      background-position: 0 0;
    }
  }
`
