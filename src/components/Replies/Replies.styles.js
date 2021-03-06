import styled from 'styled-components';

import color from 'styles/variables.styles';

export const Replies = styled.div`
  width: 100%;
  border-left: 0.3rem solid ${color.primaryDark};
  padding-left: 2rem;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media (min-width: 810px) {
    padding: 0 4rem;
    margin-left: 4rem;
  }
`;
