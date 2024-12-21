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
      from 45deg,
      #ff6b6b 0deg 5deg,
      transparent 5deg 10deg,
      #4ecdc4 10deg 15deg,
      transparent 15deg 20deg
    );
    transform-origin: center;
    transform: translate(-50%, -50%);
    animation: starburstSpin 25s linear infinite;
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
