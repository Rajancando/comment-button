// CommentForm.js
import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
  const [commentContent, setCommentContent] = useState('');

  const handleSubmit = () => {
    if (commentContent.trim() !== '') {
      onSubmit(commentContent);
      setCommentContent('');
    }
  };

  return (
    <div>
      <textarea value={commentContent} placeholder='...enter text' onChange={(e) => setCommentContent(e.target.value)} />
      <button  id='post-comment' onClick={handleSubmit}>POST</button>
    </div>
  );
};

export default CommentForm;
