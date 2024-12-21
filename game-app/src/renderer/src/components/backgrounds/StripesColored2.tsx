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
      #ff00ff 0%,
      #ff00ff 100px,
      #00ffff 100px,
      #00ffff 200px,
      #ff2a6d 200px,
      #ff2a6d 300px,
      #05d9e8 300px,
      #05d9e8 400px,
      #7700ff 400px,
      #7700ff 500px
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
