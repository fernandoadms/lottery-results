"use client";

import styled from "styled-components";

const SelectContainer = styled.div`
  filter: drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.03));
  margin: 0;

  @media (min-width: 1600px) {
    position: absolute;
    top: 90px;
    left: 95px;
  }
`;

const Select = styled.select`
  margin: 60px 0 83px;
  padding: 0 33px;
  width: 233px;
  height: 51px;

  border-radius: 7px;
  border: 0;

  appearance: none;
  filter: drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.03));
  background-color: var(--color-light);

  text-transform: uppercase;

  font-family: inherit;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  color: var(--color-dark);

  @media (min-width: 1600px) {
    margin: 0;
  }
`;

export default function SelectBox({}) {
  return (
    <SelectContainer>
      <Select name="lottery-select" id="lotterySelect">
        <option value="mega-sena">Mega-sena</option>
        <option value="quina">Quina</option>
        <option value="lotofacil">Lotofácil</option>
        <option value="lotomania">Lotomania</option>
        <option value="timemania">Timemania</option>
        <option value="diaDeSorte">Dia de sorte</option>
      </Select>
    </SelectContainer>
  );
}
