import styled from "styled-components"

import bgGif from "@/assets/particles.gif"

export const PanelContainer = styled.main`
  background-image: url(${bgGif}), url(${bgGif});
  background-position:
    top right,
    bottom left;
  background-size: 60%, 60%;
  background-repeat: no-repeat;
  mix-blend-mode: screen;
`
