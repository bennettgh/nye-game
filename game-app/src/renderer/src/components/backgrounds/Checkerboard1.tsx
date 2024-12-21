import styled from 'styled-components'

export const Checkerboard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(45deg, #3b8183 25%, transparent 25%),
      linear-gradient(-45deg, #3b8183 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #3b8183 75%),
      linear-gradient(-45deg, transparent 75%, #3b8183 75%);
    background-color: #fad089;
    background-size: 180px 180px;
    background-position:
      0 0,
      0 90px,
      90px -90px,
      -90px 0;
    animation: slideRight 8s linear infinite;
  }

  @keyframes slideRight {
    from {
      background-position:
        0 0,
        0 90px,
        90px -90px,
        -90px 0;
    }
    to {
      background-position:
        180px 0,
        180px 90px,
        270px -90px,
        90px 0;
    }
  }
`
