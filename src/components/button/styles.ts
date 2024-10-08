import styled from "styled-components"

import bg from "@/assets/button-background.svg"

export const ButtonContainer = styled.div`
  position: relative;
  border-left: solid 8px #1a3138;
  padding-left: 13px;
  color: #4e596a;

  // Círculo que acompanha a borda do container do botão
  .state-indicator {
    display: block;
    width: 10px;
    height: 10px;
    background: #1c3941;
    filter: drop-shadow(0px 0px 8px #31cbf4);
    position: absolute;
    left: -4px;
    bottom: 50%;
    transform: translate(-100%, 50%);
    border-radius: 20px;
  }

  .button-bg {
    display: none;
    background-image: url("${bg}");
    position: absolute;
    top: 0;
    width: 50%;
    height: 20px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateY(-85%);
  }

  button {
    clip-path: polygon(0 0, 100% 0, 94% 100%, 0% 100%);
    position: relative;
    box-shadow: 0px 4px 20px 0px rgba(255, 255, 255, 0.25) inset;

    // Borda do botão
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      clip-path: polygon(
        0% 0%,
        0 100%,
        3px 100%,
        3px 3px,
        calc(100% - 4px) 3px,
        calc(94% - 2px) 94%,
        3px calc(94%),
        0 100%,
        100% 100%,
        100% 0%
      );
    }
  }

  // Triângulo que simula a continuação do botão após o "recorte"
  &::before {
    content: "";
    display: block;
    width: 3.5%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    clip-path: polygon(100% 38%, 100% 38%, 100% 100%, 0% 100%);
    box-shadow: 0px 4px 20px 0px rgba(255, 255, 255, 0.25) inset;
  }

  // Borda do triângulo que simula a continuação do botão após o "recorte"
  &::after {
    content: "";
    display: block;
    width: 3.5%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    clip-path: polygon(
      0% 100%,
      3px 100%,
      calc(100% - 2.5px) calc(50% + 8px),
      calc(100% - 3px) calc(100% - 3px),
      3px calc(100% - 3px),
      3px 100%,
      100% 100%,
      100% 36%
    );
  }

  &:hover,
  &:active {
    button {
      box-shadow: 0 0 12px 0 #31cbf4 inset;

      &::after,
      &::before {
        background: #31cbf4;
        box-shadow: 0 0 12px 0 #31cbf4 inset;
      }
    }

    &::after,
    .state-indicator {
      background: #31cbf4;
      box-shadow: 0px 0px 3px #31cbf4;
    }

    .button-bg {
      display: block;
    }
  }

  &:active {
    button {
      color: #31cbf4;
      text-shadow: 0px 0px 10px #31cbf4;
    }
  }
`
