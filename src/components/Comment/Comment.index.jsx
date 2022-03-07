// components
import Replies from '../Replies/Replies.index';
import Reply from '../Reply/Reply.index';

// styles
import * as C from './Comment.styles';

// assets
import iconPlus from 'assets/images/icon-plus.svg';
import iconMinus from 'assets/images/icon-minus.svg';
import iconReply from 'assets/images/icon-reply.svg';
import iconEdit from 'assets/images/icon-edit.svg';
import iconDelete from 'assets/images/icon-delete.svg';

const Comment = ({ content, createdAt, score, user, replyingTo, replies }) => {
  const imgSrc = require(`../../assets/images/${user.image.png}`);

  const repliesDisplay = replies.map((reply) => (
    <Reply key={reply.id} {...reply} />
  ));

  return (
    <>
      <C.Container>
        <C.CommentWrapper>
          <C.UserImg src={imgSrc} />
          <C.Username>{user.username}</C.Username>
          {user.username === 'juliusomo' && <C.You>you</C.You>}
          <C.PostedDate>{createdAt}</C.PostedDate>
        </C.CommentWrapper>
        <C.Text>
          {replyingTo && <C.ButtonSpan reply>@{replyingTo}</C.ButtonSpan>}{' '}
          {content}
        </C.Text>
        <C.ButtonBox>
          <C.Button>
            <C.ButtonIcon src={iconPlus} alt="plus" />
          </C.Button>
          <C.ButtonSpan>{score}</C.ButtonSpan>
          <C.Button>
            <C.ButtonIcon src={iconMinus} alt="minus" />
          </C.Button>
        </C.ButtonBox>
        {user.username === 'juliusomo' ? (
          <C.ButtonWrapper>
            <C.ReplyButton>
              <C.ButtonIcon src={iconDelete} alt="reply" />
              <C.ButtonSpan delete>Delete</C.ButtonSpan>
            </C.ReplyButton>
            <C.ReplyButton>
              <C.ButtonIcon src={iconEdit} alt="reply" reply />
              <C.ButtonSpan reply>Edit</C.ButtonSpan>
            </C.ReplyButton>
          </C.ButtonWrapper>
        ) : (
          <C.ReplyButton>
            <C.ButtonIcon src={iconReply} alt="reply" reply />
            <C.ButtonSpan reply>Reply</C.ButtonSpan>
          </C.ReplyButton>
        )}
      </C.Container>

      {replies.length > 0 && <Replies>{repliesDisplay}</Replies>}
    </>
  );
};

export default Comment;
