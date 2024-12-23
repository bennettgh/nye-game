import styled from 'styled-components'

export const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #6c5ce7, #ff6b6b);
    transform-origin: center;
    mask: repeating-radial-gradient(
      circle at center,
      black 0px,
      black 5px,
      transparent 5px,
      transparent 15px
    );
    -webkit-mask: repeating-radial-gradient(
      circle at center,
      black 0px,
      black 5px,
      transparent 5px,
      transparent 15px
    );
    animation: wormhole 8s linear infinite;
  }

  @keyframes wormhole {
    0% {
      transform: translate(-50%, -50%) scale(1) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) scale(1) rotate(360deg);
    }
  }
`
