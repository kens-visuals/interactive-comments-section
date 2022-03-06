import styled from 'styled-components';

import color from 'styles/variables.styles';

export const Container = styled.div`
  width: 100%;
  background-color: ${color.primary};
  border-radius: 0.8rem;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr auto;

  @media (min-width: 810px) {
    padding: 2.5rem;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: auto 1fr;
    gap: ${(props) => (props.isInput ? '0 2rem' : '1.8rem 2rem')};
  }
`;

export const CommentWrapper = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  grid-column: 1 / -1;

  @media (min-width: 810px) {
    margin-bottom: 0;
    grid-column: 2 / -1;
    grid-row: 1 / 2;
  }
`;

export const UserImg = styled.img`
  width: 3.2rem;
  border-radius: 50%;
  aspect-ratio: 1;
`;

export const Username = styled.span`
  color: ${color.secondaryDark};
  font-weight: 800;
`;

export const You = styled.span`
  color: ${color.primary};
  background-color: ${color.violet};
  border-radius: 0.2rem;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.2rem 0.8rem;
`;

export const PostedDate = styled.span`
  color: ${color.secondary};
  font-weight: 500;
`;

export const Text = styled.p`
  color: ${color.secondary};
  font-weight: 400;
  font-size: clamp(1.6rem, 2vw, 1.7rem);
  line-height: 1.5;
  margin-bottom: 1.5rem;
  grid-column: 1 / -1;

  @media (min-width: 810px) {
    margin-bottom: 0;
    grid-column: 2 / -1;
  }
`;

export const Mention = styled.span`
  color: ${color.violet};
  font-weight: 800;
`;

export const ButtonBox = styled.div`
  width: 10rem;
  background-color: ${color.primaryLight};
  padding: 1rem 0.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 810px) {
    width: 4rem;
    height: 10rem;
    flex-direction: column;
    grid-column: 1 / 2;
    grid-row: 1 / -1;
    justify-self: center;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const ButtonIcon = styled.img`
  width: ${(props) => (props.reply ? '1.5rem' : '1rem')};
`;

export const ButtonSpan = styled.span`
  color: ${color.violet};
  font-size: 1.6rem;
  font-weight: ${(props) => (props.reply ? 800 : 500)};
`;

export const ReplyButton = styled(Button)`
  color: ${color.violet};
  gap: 0.8rem;
  justify-self: end;
  transition: all 0.3s;

  &:hover {
    opacity: 0.5;
  }

  @media (min-width: 810px) {
    grid-column: 3 / -1;
    grid-row: 1 / 2;
  }
`;
