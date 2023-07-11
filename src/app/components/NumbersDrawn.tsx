"use client";

import styled from "styled-components";

const ListNumbers = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
  gap: 28px;

  padding: 0 28px;

  @media (min-width: 1600px) {
    transform: translateY(-50%);
    padding: 0;
    position: absolute;
    top: 50%;
    left: calc(750px);
  }
`;

const Item = styled.li`
  height: 76px;
  width: 76px;

  border-radius: 50%;
  background-color: var(--color-white);
  filter: drop-shadow(0px 0px 16px rgba(0, 0, 0, 0));

  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-dark);
  font-family: inherit;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;

  @media (min-width: 1600px) {
    height: 110px;
    width: 110px;
    font-size: 27px;
  }
`;

export default function NumbersDraws() {
  return (
    <ListNumbers>
      <Item>06</Item>
      <Item>09</Item>
      <Item>28</Item>
      <Item>33</Item>
      <Item>37</Item>
      <Item>40</Item>
    </ListNumbers>
  );
}
