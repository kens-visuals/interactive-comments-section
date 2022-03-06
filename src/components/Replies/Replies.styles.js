import styled from 'styled-components';

import color from 'styles/variables.styles';

export const Replies = styled.div`
  width: 100%;
  border-left: 0.3rem solid ${color.primaryDark};
  padding: 0 5rem;
  margin-left: 5rem;
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
