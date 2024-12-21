import styled from 'styled-components'

export const TriColorTitle = styled.div`
  font-family: 'Arvo';
  font-size: 80px;
  font-weight: 900;
  color: #fff;
  text-shadow:
    3px 3px 0 hsl(${() => Math.random() * 360}deg, 80%, 65%),
    6px 6px 0 hsl(${() => Math.random() * 360}deg, 80%, 65%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%);
  animation: ${() => {
    const animations = ['splashSpin', 'splashBounce', 'splashZoom', 'splashFlip']
    return `${animations[Math.floor(Math.random() * animations.length)]} 1.5s ease-in-out`
  }};

  @keyframes splashSpin {
    0% {
      transform: translate(-50%, -50%) scale(0) rotate(0deg);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2) rotate(360deg);
    }
    100% {
      transform: translate(-50%, -50%) scale(1) rotate(720deg);
    }
  }

  @keyframes splashBounce {
    0% {
      transform: translate(-50%, -150%) scale(0);
    }
    60% {
      transform: translate(-50%, -30%) scale(1.2);
    }
    80% {
      transform: translate(-50%, -60%) scale(0.9);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @keyframes splashZoom {
    0% {
      transform: translate(-50%, -50%) scale(3) rotate(15deg);
      opacity: 0;
    }
    100% {
      transform: translate(-50%, -50%) scale(1) rotate(0deg);
      opacity: 1;
    }
  }

  @keyframes splashFlip {
    0% {
      transform: translate(-50%, -50%) scale(0) rotateX(180deg);
    }
    60% {
      transform: translate(-50%, -50%) scale(1.2) rotateX(-20deg);
    }
    100% {
      transform: translate(-50%, -50%) scale(1) rotateX(0deg);
    }
  }
`
