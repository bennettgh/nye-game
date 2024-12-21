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
      #ff6b6b 0%,
      #ff6b6b 100px,
      #4ecdc4 100px,
      #4ecdc4 200px,
      #45b7d1 200px,
      #45b7d1 300px,
      #96ceb4 300px,
      #96ceb4 400px,
      #ffbe0b 400px,
      #ffbe0b 500px
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
