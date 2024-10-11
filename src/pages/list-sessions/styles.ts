import { Link } from "react-router-dom"
import styled from "styled-components"

import bgScrollThumb from "@/assets/scroll-thumb.svg"
import bgScrollTrack from "@/assets/scroll-track.svg"
import bgContainer from "@/assets/sessions-background.png"

export const PageWrapper = styled.div`
  min-height: 1000px;
  overflow-x: auto;
`

export const SessionsContainer = styled.main`
  min-width: 1236px;
  height: 589px;
  background-image: url(${bgContainer});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 1300px) {
    background-image: none;
    min-width: unset;
    min-height: unset;
    box-shadow: 0px 4px 100px 1px rgba(49, 203, 244, 0.3) inset;
    margin-top: 2rem;

    .sessions-content {
      padding: 2rem;
      height: auto;

      a {
        font-size: 1rem;
      }

      div {
        gap: 1rem;
      }
    }
  }

  .sessions-content {
    margin: 20px 0;
    height: calc(100% - 40px);
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 30px;
    }

    &::-webkit-scrollbar-track {
      background-image: url(${bgScrollTrack});
      background-size: auto 100%;
      background-position: right center;
      background-repeat: no-repeat;
    }

    &::-webkit-scrollbar-thumb {
      background-image: url(${bgScrollThumb});
      background-size: auto 100%;
      background-position: top;
      background-repeat: no-repeat;
    }
  }
`

export const SessionName = styled(Link)`
  &:hover {
    text-shadow: 0px 0px 10px #fdd125;
    color: #fdd125;

    span {
      filter: drop-shadow(0px 0px 10px #ffad33);
    }

    svg {
      fill: #fff568;
      stroke: #fff568;
      text-shadow: none;
    }
  }
`

export const IconWrapper = styled.span`
  filter: drop-shadow(0px 0px 10px #31cbf4);
`

export const RadarGif = styled.img`
  mix-blend-mode: lighten;
  position: absolute;
  transform: translate(40px, -150px);

  @media screen and (max-width: 1300px) {
    display: none;
  }
`
