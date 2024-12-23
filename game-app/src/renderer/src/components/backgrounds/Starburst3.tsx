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
    background: conic-gradient(from 0deg, #ff6b6b, #ffd93d, #4ecdc4, #6c5ce7, #ff6b6b);
    transform-origin: center;
    transform: translate(-50%, -50%);
    animation: starburstSpin 30s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: repeating-conic-gradient(
      from 0deg,
      transparent 0deg 15deg,
      rgba(255, 255, 255, 0.1) 15deg 30deg
    );
    transform-origin: center;
    transform: translate(-50%, -50%);
    animation: starburstSpin 20s linear infinite reverse;
  }

  @keyframes starburstSpin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`
