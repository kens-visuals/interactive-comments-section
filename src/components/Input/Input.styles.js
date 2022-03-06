import styled from 'styled-components';

import color from 'styles/variables.styles';

export const Input = styled.textarea`
  width: 100%;
  max-width: 100%;
  height: 10rem;
  border: 0.2rem solid ${color.primaryDark};
  border-radius: 0.5rem;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 2rem;
  padding: 1rem 2rem;
  resize: none;
  grid-column: 1 / -1;

  &:focus-visible {
    outline: 0.2rem solid ${color.violet};
  }

  &::placeholder {
    color: ${color.secondary};
  }

  @media (min-width: 810px) {
    margin-bottom: 0;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;

export const SendButton = styled.button`
  width: 10rem;
  color: ${color.primary};
  background-color: ${color.violet};
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  text-transform: uppercase;
  padding: 1rem;
  transition: all 0.4s;
  justify-self: end;

  &:hover {
    cursor: pointer;
    background-color: ${color.violetLight};
  }

  @media (min-width: 810px) {
    height: 5rem;
    grid-column: 3 / -1;
    grid-row: 1 / 2;
  }
`;
