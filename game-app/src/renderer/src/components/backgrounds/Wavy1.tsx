import styled from 'styled-components'

export const Wavy = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  --s: 140px;
  --c1: #ab3e5b;
  --c2: #ffbe40;
  --_g: #0000 25%, #0008 47%, var(--c1) 53% 147%, var(--c2) 153% 247%, var(--c1) 253% 347%,
    var(--c2) 353% 447%, var(--c1) 453% 547%, #0008 553%, #0000 575%;
  --_s: calc(25% / 3) calc(25% / 4) at 50%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background:
      radial-gradient(var(--_s) 100%, var(--_g)),
      radial-gradient(var(--_s) 100%, var(--_g)) calc(var(--s) / 2) calc(3 * var(--s) / 4),
      radial-gradient(var(--_s) 0, var(--_g)) calc(var(--s) / 2) 0,
      radial-gradient(var(--_s) 0, var(--_g)) 0 calc(3 * var(--s) / 4),
      repeating-linear-gradient(
        90deg,
        #accec0 calc(25% / -6) calc(25% / 6),
        #61a6ab 0 calc(25% / 2)
      );
    background-size: var(--s) calc(3 * var(--s) / 2);
    animation: moveBackground 2.5s infinite linear;
  }

  @keyframes moveBackground {
    to {
      background-position:
        var(--s) 0,
        calc(var(--s) / -2) calc(3 * var(--s) / 4),
        calc(3 * var(--s) / 2) 0,
        calc(-1 * var(--s)) calc(3 * var(--s) / 4),
        0 0;
    }
  }
`
