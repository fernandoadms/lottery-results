"use client";

import styled from "styled-components";
import IconMegaSena from "./IconMegaSena";

interface LoterryTitleProps {
  name: string;
}

const TitleContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11.85px;
  margin: 0 0 75px;

  font-family: inherit;
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: normal;
  color: var(--color-white);

  @media (min-width: 1600px) {
    flex-direction: row;
    gap: 22.67px;
    margin: 0 0 0 95px;
  }
`;

export function LotteryTitle(props: LoterryTitleProps) {
  return (
    <TitleContainer>
      <IconMegaSena />
      {props.name}
    </TitleContainer>
  );
}
