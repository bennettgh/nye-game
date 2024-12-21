import styled from 'styled-components'

const AnimatedBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }

  @keyframes radiateOut {
    0% {
      transform: scale(0.1);
      opacity: 0.8;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .heart-base {
    transform-origin: center;
    fill: #ff4d6d;
  }

  .heart1 {
    animation: radiateOut 4s infinite ease-out;
  }
  .heart2 {
    animation: radiateOut 4s infinite ease-out 1s;
  }
  .heart3 {
    animation: radiateOut 4s infinite ease-out 2s;
  }
  .heart4 {
    animation: radiateOut 4s infinite ease-out 3s;
  }
`

export const Heart = () => (
  <AnimatedBackground>
    <svg viewBox="0 0 512 512">
      {[1, 2, 3, 4].map((i) => (
        <path
          key={i}
          className={`heart-base heart${i}`}
          d="M256 448l-30.164-27.211C118.718 322.442 48 258.61 48 179.095 48 114.221 97.918 64 162.4 64c36.399 0 70.717 16.742 93.6 43.947C278.882 80.742 313.199 64 349.6 64 414.082 64 464 114.221 464 179.095c0 79.516-70.719 143.348-177.836 241.694L256 448z"
        />
      ))}
    </svg>
  </AnimatedBackground>
)
