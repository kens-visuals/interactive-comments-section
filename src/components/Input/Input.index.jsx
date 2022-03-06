// styles
import * as I from './Input.styles';
import * as C from '../Comment/Comment.styles';

// assets
import currUser from '../../assets/images/avatars/image-juliusomo.png';

const Input = () => {
  return (
    <C.Container isInput>
      <I.Input placeholder="Add a comment..." />
      <C.UserImg src={currUser} alt="juliusomo" />
      <I.SendButton>Send</I.SendButton>
    </C.Container>
  );
};

export default Input;
