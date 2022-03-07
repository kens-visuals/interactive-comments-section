// styles
import * as C from '../Comments/Comments.styles';

// assets
import iconPlus from 'assets/images/icon-plus.svg';
import iconMinus from 'assets/images/icon-minus.svg';
import iconReply from 'assets/images/icon-reply.svg';
import iconEdit from 'assets/images/icon-edit.svg';
import iconDelete from 'assets/images/icon-delete.svg';

const Reply = (reply) => (
  <C.Container key={reply.id}>
    <C.CommentWrapper>
      <C.UserImg src={require(`../../assets/images/${reply.user.image.png}`)} />
      <C.Username>{reply.user.username}</C.Username>
      {reply.user.username === 'juliusomo' && <C.You>you</C.You>}
      <C.PostedDate>{reply.createdAt}</C.PostedDate>
    </C.CommentWrapper>
    <C.Text>
      <C.ButtonSpan reply>@{reply.replyingTo}</C.ButtonSpan> {reply.content}
    </C.Text>
    <C.ButtonBox>
      <C.Button>
        <C.ButtonIcon src={iconPlus} alt="plus" />
      </C.Button>
      <C.ButtonSpan>{reply.score}</C.ButtonSpan>
      <C.Button>
        <C.ButtonIcon src={iconMinus} alt="minus" />
      </C.Button>
    </C.ButtonBox>
    {reply.user.username === 'juliusomo' ? (
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
);

export default Reply;
