import styled from "styled-components";

export const StyledMain = styled.main`
  margin: 0 auto;
  margin-top: 20px;
  width: 95%;
  height: 100%;
  max-width: 1300px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 25px;
  }

  @media (min-width: 1300px) {
    justify-content: space-evenly;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;

    section {
      width: 500px;
      height: 678px;
    }
  }

  @media (min-width: 1200px) {
    section {
      width: 700px;
      height: 500px;
    }
  }

  section {
    background-color: #f5f5f5;
    border-radius: 5px;
    overflow-y: auto;

    div {
      background-color: #1c2d3e;
      border-radius: 3px 3px 0px 0px;
      align-items: center;
      padding: 10px;
      display: flex;
      justify-content: space-around;

      p {
        color: #ffffff;
        font-size: 15px;
      }

      input {
        width: 61%;
        border-radius: 5px;
        height: 25px;
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
    }

    ul {
      padding: 10px;
      display: flex;
      flex-wrap: nowrap;
      gap: 10px;
      overflow-x: auto;

      p {
        margin: 0 auto;
        text-align: center;
        font-size: 15px;
        font-weight: bolder;
      }

      @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
      }

      li {
        cursor: pointer;
        align-items: center;
        padding: 20px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 25px;
        background-color: #d9d9d9;
        width: 12.5rem;

        :hover {
          border: 0.5px solid #0086d4;
        }

        @media (min-width: 1024px) {
          align-items: center;
          width: 20rem;
        }

        p {
          font-size: 15px;
          color: #828282;
        }

        b {
          font-size: 15px;
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
          height: 2.2em;
          width: 90px;
          -webkit-animation: jello-horizontal 0.9s both;
          animation: jello-horizontal 0.9s both;
          border: 2px solid #016dd9;
          outline: none;
          font-size: 15px;
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
      }
    }
  }
`;

export const Cart = styled.div`
  width: 95%;
  position: absolute;
  bottom: 0;

  @media (min-width: 768px) {
    position: relative;
    max-width: 290px;
  }

  div {
    display: flex;
    background-color: #1c2d3e;
    border-radius: 3px;
    align-items: center;
    padding: 10px;

    p {
      color: #ffffff;
      font-size: 15px;
    }
  }

  section {
    background-color: #f5f5f5;
    border-radius: 0px 0px;

    @media (min-width: 768px) {
      position: relative;
      max-width: 290px;
      max-height: 227px;
    }

    ul {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      @media (min-width: 768px) {
      }
      li {
        @media (min-width: 768px) {
          width: 13rem;
        }
        width: 8rem;
      }

      div {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        background-color: #f5f5f5;

        h2 {
          font-size: 15px;
        }

        p {
          color: #828282;
        }
      }
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
      height: 2.2em;
      width: 90px;
      -webkit-animation: jello-horizontal 0.9s both;
      animation: jello-horizontal 0.9s both;
      border: 2px solid #016dd9;
      outline: none;
      font-size: 15px;
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
  }

  div {
    button {
      margin: 0 auto;
      background-color: #0086d4;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding: 8px;
      font-size: 15px;
    }
    button {
      height: 2.2em;
      -webkit-animation: jello-horizontal 0.9s both;
      animation: jello-horizontal 0.9s both;
      border: 2px solid #016dd9;
      outline: none;
      font-size: 15px;
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
  }
`;

export const FormStyled = styled.form`
  display: flex;
  max-width: 350px;
  margin: 0 auto;
  width: 95%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 30px;
  background-color: #1c2d3e;
  border-radius: 5px;
  max-height: 490px;

  @media (min-width: 320px) {
    margin-top: 10px;
  }

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
