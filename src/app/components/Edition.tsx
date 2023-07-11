"use client";

import styled from "styled-components";

const Title = styled.h2`
  color: var(--color-white);
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;

  @media (min-width: 1600px) {
    position: absolute;
    bottom: 90px;
    left: 95px;
  }
`;

export default function Edition() {
  return (
    <div>
      <Title>Concurso Nº 4560</Title>
      {/* <h3>4531 – 07/04/2020</h3> */}
    </div>
  );
}
