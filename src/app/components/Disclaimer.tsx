"use client";

import styled from "styled-components";

const DisclaimerText = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  color: var(--black);
  text-align: center;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 147.4%;
  width: 100%;
  padding: 35px;

  @media (min-width: 1600px) {
    max-width: 80%;
    transform: translateX(0);
    bottom: 95px;
    right: 10%;
  }
`;

export default function Disclaimer() {
  return (
    <DisclaimerText>
      Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a
      CAIXA.
    </DisclaimerText>
  );
}
