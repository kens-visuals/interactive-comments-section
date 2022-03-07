// styles
import * as I from './Input.styles';
import * as C from '../Comment/Comment.styles';

// assets
import currUser from 'assets/images/avatars/image-juliusomo.png';

const Input = ({ value, addNewComment, sendNewComment }) => {
  return (
    <C.Container isInput>
      <I.Input
        value={value}
        placeholder="Add a comment..."
        onChange={(e) => addNewComment(e)}
      />
      <C.UserImg src={currUser} alt="juliusomo" />
      <I.SendButton onClick={sendNewComment}>Send</I.SendButton>
    </C.Container>
  );
};

export default Input;
