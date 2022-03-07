import { useState } from 'react';

// components
import Comment from 'components/Comment/Comment.index';
import Input from 'components/Input/Input.index';

// styles
import * as C from './Comments.styles';

// assests
import DATA from 'assets/data.json';

// components
import Replies from '../Replies/Replies.index';
import Reply from '../Reply/Reply.index';

const Comments = () => {
  const [comments, setComments] = useState(DATA.comments);
  const [newComment, setNewComment] = useState('');

  const commentsDisplay = comments.map((comment) => (
    <Comment key={comment.id} {...comment} />
  ));

  const addNewComment = (e) => setNewComment(e.target.value);

  const sendNewComment = () => {
    if (!newComment) return;

    setComments((prevComments) => [
      ...prevComments,
      {
        id: comments.length + 1,
        content: newComment,
        createdAt: '1 minute ago',
        score: 0,
        user: {
          image: {
            png: 'avatars/image-juliusomo.png',
            webp: 'avatars/image-juliusomo.webp',
          },
          username: 'juliusomo',
        },
        replies: [],
      },
    ]);

    setNewComment('');
  };

  return (
    <C.Comments>
      {commentsDisplay}
      <Input
        value={newComment}
        addNewComment={addNewComment}
        sendNewComment={sendNewComment}
      />
    </C.Comments>
  );
};

export default Comments;
