import styled from 'styled-components'

export const Stripes = styled.div`
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
      #44444455 0%,
      #44444455 50px,
      #33333355 50px,
      #33333355 100px
    );
    );
    background-size: 600% 200%;
    animation: slideLeft 60s linear infinite;
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
