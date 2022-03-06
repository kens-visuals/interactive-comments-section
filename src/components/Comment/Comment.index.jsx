// components
import Replies from '../Replies/Replies.index';

// styles
import * as C from './Comment.styles';

// assets
import iconPlus from '../../assets/images/icon-plus.svg';
import iconMinus from '../../assets/images/icon-minus.svg';
import iconReply from '../../assets/images/icon-reply.svg';

const Comment = ({ content, createdAt, score, user, replies }) => {
  const imgSrc = require(`../../assets/images/${user.image.png}`);

  const repliesDisplay = replies.map((reply) => (
    <C.Comment key={reply.id}>
      <C.CommentWrapper>
        <C.UserImg
          src={require(`../../assets/images/${reply.user.image.png}`)}
        />
        <C.Username>{reply.user.username}</C.Username>
        <C.PostedDate>{reply.createdAt}</C.PostedDate>
      </C.CommentWrapper>
      <C.Text>{reply.content}</C.Text>
      <C.ButtonBox>
        <C.Button>
          <C.ButtonIcon src={iconPlus} alt="plus" />
        </C.Button>
        <C.ButtonSpan>{reply.score}</C.ButtonSpan>
        <C.Button>
          <C.ButtonIcon src={iconMinus} alt="minus" />
        </C.Button>
      </C.ButtonBox>
      <C.ReplyButton>
        <C.ButtonIcon src={iconReply} alt="reply" reply />
        <C.ButtonSpan reply>Reply</C.ButtonSpan>
      </C.ReplyButton>
    </C.Comment>
  ));

  return (
    <>
      <C.Comment>
        <C.CommentWrapper>
          <C.UserImg src={imgSrc} />
          <C.Username>{user.username}</C.Username>
          <C.PostedDate>{createdAt}</C.PostedDate>
        </C.CommentWrapper>
        <C.Text>{content}</C.Text>
        <C.ButtonBox>
          <C.Button>
            <C.ButtonIcon src={iconPlus} alt="plus" />
          </C.Button>
          <C.ButtonSpan>{score}</C.ButtonSpan>
          <C.Button>
            <C.ButtonIcon src={iconMinus} alt="minus" />
          </C.Button>
        </C.ButtonBox>
        <C.ReplyButton>
          <C.ButtonIcon src={iconReply} alt="reply" reply />
          <C.ButtonSpan reply>Reply</C.ButtonSpan>
        </C.ReplyButton>
      </C.Comment>

      {replies.length > 0 && <Replies>{repliesDisplay}</Replies>}
    </>
  );
};

export default Comment;
