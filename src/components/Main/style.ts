import styled from "styled-components";

export const StyledMain = styled.main`
  margin: 0 auto;
  margin-top: 50px;
  width: 95%;
  height: 100%;

  section {
    background-color: #f5f5f5;
    border-radius: 5px;

    div {
      background-color: #1c2d3e;
      border-radius: 3px;
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

      li {
        padding: 20px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 25px;
        background-color: #d9d9d9;
        width: 12.5rem;

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
