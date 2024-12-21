import styled from 'styled-components'

export const StarburstBackground = styled.div`
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
    background: repeating-conic-gradient(
      from 0deg,
      #ff6b6b 0deg 30deg,
      #ffd93d 30deg 60deg,
      #4ecdc4 60deg 90deg,
      #6c5ce7 90deg 120deg
    );
    transform-origin: center;
    transform: translate(-50%, -50%);
    animation: waveSpin 20s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120%;
    height: 120%;
    background: repeating-conic-gradient(
      from 45deg,
      transparent 0deg 40deg,
      rgba(255, 255, 255, 0.1) 40deg 50deg
    );
    transform-origin: center;
    transform: translate(-50%, -50%);
    animation: waveSpin 15s linear infinite reverse;
  }

  @keyframes waveSpin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`
