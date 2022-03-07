import { useState } from 'react';

// components
import Comment from 'components/Comments/Comments.index';
import Input from 'components/Input/Input.index';

// styles
import * as C from './CommentsContainer.styles';

// assests
import DATA from 'assets/data.json';

const Comments = () => {
  const [comments, setComments] = useState(DATA.comments);
  const [newComment, setNewComment] = useState('');

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

  const calcScore = (userId, calcOption) => {
    const updatedUser = comments.map((comment) =>
      comment.id === userId
        ? {
            ...comment,
            score: calcOption ? comment.score + 1 : comment.score - 1,
          }
        : comment
    );

    setComments(updatedUser);
  };

  const commentsDisplay = comments.map((comment) => (
    <Comment key={comment.id} {...comment} calcScore={calcScore} />
  ));

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
