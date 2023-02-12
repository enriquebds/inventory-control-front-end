import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  max-width: 350px;
  width: 95%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  margin: 100px auto;
  background-color: #1c2d3e;
  border-radius: 5px;
  h3 {
    font-size: 0.8em;
    color: #fff;
  }
  div {
    padding: 15px 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: flex-start;
    span {
      padding: 12px;
      color: #e74c3c;
    }
  }
  label {
    font-size: 12px;
    color: #f8f9fa;
  }
  input {
    width: 250px;
    height: 30px;
    border: 2px solid transparent;
    outline: none;
    font-size: 12px;
    border-bottom: 2px solid #3f3f3f;
    caret-color: #0086d4;
    background-color: #212121;
    color: #fff;
    padding: 10px;
    transition: 0.5s linear;
    font-family: monospace;
    letter-spacing: 1px;
  }
  input:focus {
    border: 2px solid #0086d4;
    caret-color: #0086d4;
    color: #0086d4;
    box-shadow: 4px 4px 10px #070707;
  }
  input:focus::placeholder {
    color: #0086d4;
  }
  button {
    background-color: #0086d4;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px;
    width: 250px;
    font-size: 15px;
  }
  button {
    height: 2.1em;
    width: 250px;
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
  p {
    margin-bottom: 15px;
    font-size: 13px;
    color: #fff;
  }
  a {
    text-align: center;
    background-color: #0086d4;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px;
    font-size: 15px;
  }
  a {
    height: 2.1em;
    width: 250px;
    -webkit-animation: jello-horizontal 0.9s both;
    animation: jello-horizontal 0.9s both;
    border: 2px solid #016dd9;
    outline: none;
    font-size: 17px;
  }
  a:hover {
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
