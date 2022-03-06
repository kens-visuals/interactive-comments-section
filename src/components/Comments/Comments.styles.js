import styled from 'styled-components';

import color from 'styles/variables.styles';

export const Comments = styled.main`
  width: 92%;
  max-width: 75rem;
  margin: 5rem 0;

  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
