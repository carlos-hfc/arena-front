import styled from "styled-components"

export const CardContainer = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 364px;
  padding: 2rem 1rem;
  gap: 1rem;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 20px 0px 100px -24px rgba(49, 203, 244, 0.2) inset;

  // Bordas cinzas do container
  &::before,
  &::after {
    content: "";
    display: block;
    width: 2px;
    height: 90%;
    background: rgba(72, 74, 74, 0.5);
    filter: drop-shadow(0px 0px 10px #4e596a);
    backdrop-filter: blur(50px);
    position: absolute;
  }

  &::before {
    left: -1rem;
  }

  &::after {
    right: -1rem;
    width: 2.5px;
  }
`

export const Label = styled.span`
  font-size: 1.5rem;
  text-shadow: 0px 0px 10px #31cbf4;
  color: #31cbf4;
  line-height: normal;
`
export const Value = styled(Label)`
  font-size: 1.6rem;
  text-shadow: 0px 0px 15px #fdd125;
  color: #fdd125;
`
export const CardBorder = styled.img`
  display: block;
  width: 100%;
  max-width: 364px;
  position: absolute;
  top: 0;
  transform: translateY(-25%);
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  &.border-bottom {
    bottom: 0;
    top: auto;
    transform: rotate(180deg) translateY(-25%);
  }
`
