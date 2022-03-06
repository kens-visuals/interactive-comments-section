import { useState } from 'react';

// components
import Comment from 'components/Comment/Comment.index';

// styles
import * as C from './Comments.styles';

// assests
import DATA from '../../assets/data.json';

const Comments = () => {
  const [comments, setComments] = useState(DATA.comments);

  const commentsDisplay = comments.map((comment) => (
    <Comment key={comment.id} {...comment} />
  ));

  return <C.Comments>{commentsDisplay}</C.Comments>;
};

export default Comments;
