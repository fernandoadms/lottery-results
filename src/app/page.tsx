"use client";

import styled from "styled-components";
import Disclaimer from "./components/Disclaimer";
import Edition from "./components/Edition";
import { LotteryTitle } from "./components/LotteryTitle";
import NumbersDraws from "./components/NumbersDrawn";
import SelectBox from "./components/SelectBox";
// https://www.youtube.com/watch?v=mqzSY6Qy0yk

const Main = styled.main`
  overflow: hidden;
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: var(--color-megasena);

  @media (min-width: 1600px) {
    flex-direction: row;
  }

  &:before {
    z-index: -1;
    content: "";
    background-color: var(--color-light);

    position: absolute;
    bottom: 0;
    left: 50%;

    width: 100vh;
    height: 100vh;

    border-radius: 50%;
    transform-origin: bottom;
    transform: translate(-50%, 200%) scale(2.5);

    @media (min-width: 1600px) {
      width: calc(2 * 100vh);
      height: calc(2 * 100vh);
      transform: translate(0, 0) scale(1);
      left: 500px;
      bottom: inherit;
    }
  }
`;

const Box = styled.div``;

export default function Home() {
  return (
    <Main>
      <Box>
        <SelectBox />

        <LotteryTitle name={"Mega-sena"} />

        <Edition />
      </Box>

      <Box>
        <NumbersDraws />

        <Disclaimer />
      </Box>
    </Main>
  );
}
