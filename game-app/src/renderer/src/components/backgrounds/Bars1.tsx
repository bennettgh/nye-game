import styled from 'styled-components'

export const Bars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // z-index: -1;
  background: rgba(0, 0, 0, 0);
  background-size: 200% 100%;
  animation: slide 60s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      90deg,
      #33333355 0%,
      #33333355 40px,
      #44444455 40px,
      #44444455 80px
    );
    background-size: 200% 100%;
    animation: slide 10s linear infinite;
  }

  @keyframes slide {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -100% 0;
    }
  }
`
