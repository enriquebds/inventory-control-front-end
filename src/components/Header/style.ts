import styled from "styled-components";

export const HeaderStyled = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  background-color: #1c2d3e;
  align-items: center;
  h1 {
    color: #ffffff;
    font-size: 13px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    button {
      padding: 5px;
      width: 100%;
      font-size: 13px;
    }
  }

  button {
    height: 2em;
    width: 50px;
    background-color: #016dd9;
    color: #ffffff;
    border-radius: 5px;
    -webkit-animation: jello-horizontal 0.9s both;
    animation: jello-horizontal 0.9s both;
    border: 2px solid #016dd9;
    outline: none;
    font-size: 17px;
  }
  button:hover {
    background: #016dd9;
    color: #ffffff;
    animation: squeeze3124 0.9s both;
  }
  @keyframes squeeze3124 {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    30% {
      -webkit-transform: scale3d(1.25, 0.75, 1);
      transform: scale3d(1.25, 0.75, 1);
    }
    40% {
      -webkit-transform: scale3d(0.75, 1.25, 1);
      transform: scale3d(0.75, 1.25, 1);
    }
    50% {
      -webkit-transform: scale3d(1.15, 0.85, 1);
      transform: scale3d(1.15, 0.85, 1);
    }
    65% {
      -webkit-transform: scale3d(0.95, 1.05, 1);
      transform: scale3d(0.95, 1.05, 1);
    }
    75% {
      -webkit-transform: scale3d(1.05, 0.95, 1);
      transform: scale3d(1.05, 0.95, 1);
    }
    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
`;
