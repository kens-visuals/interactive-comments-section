import { useState } from 'react';

// components
import Comment from 'components/Comment/Comment.index';
import Input from 'components/Input/Input.index';

// styles
import * as C from './Comments.styles';

// assests
import DATA from '../../assets/data.json';

const Comments = () => {
  const [comments, setComments] = useState(DATA.comments);

  const commentsDisplay = comments.map((comment) => (
    <Comment key={comment.id} {...comment} />
  ));

  return (
    <C.Comments>
      {commentsDisplay}
      <Input />
    </C.Comments>
  );
};

export default Comments;
