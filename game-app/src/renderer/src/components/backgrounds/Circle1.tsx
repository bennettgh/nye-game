import styled from 'styled-components'

export const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: repeating-radial-gradient(
      circle at center,
      #ff6b6b 0px,
      #ff6b6b 10px,
      transparent 10px,
      transparent 30px,
      #4ecdc4 30px,
      #4ecdc4 40px,
      transparent 40px,
      transparent 60px
    );
    transform-origin: center;
    transform: translate(-50%, -50%);
    animation: circlePulse 8s linear infinite;
  }

  @keyframes circlePulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`
