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
      #ff6b6b 0deg 2deg,
      transparent 2deg 8deg,
      #4ecdc4 8deg 10deg,
      transparent 10deg 16deg
    );
    transform-origin: center;
    transform: translate(-50%, -50%) scale(1.5);
    animation: spiralSpin 15s linear infinite;
  }

  @keyframes spiralSpin {
    from {
      transform: translate(-50%, -50%) scale(1.5) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) scale(1.5) rotate(360deg);
    }
  }
`
