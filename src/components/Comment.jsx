// Comment.js
import React, { useState } from 'react';

const Comment = ({ comment, onDelete, onReply, onToggleStar }) => {
  const [replying, setReplying] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  const handleReply = () => {
    onReply(comment.id, replyContent);
    setReplyContent('');
    setReplying(false);
  };

  return (
    <div id='full-bag' style={{ marginLeft: `${comment.level * 20}px`, border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <p>{comment.text}</p>
      <button  id='delete-button' onClick={() => onDelete(comment.id)}>Delete</button>
     
      <button id='reply-button' onClick={() => setReplying(!replying)}>Reply</button>
      {comment.replies.length > 0 && (
        <div>
          <strong>Replies:</strong>
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} onDelete={onDelete} onReply={onReply} onToggleStar={onToggleStar} />
          ))}
        </div>
      )}
      {replying && (
        <div>
          <textarea value={replyContent} onChange={(e) => setReplyContent(e.target.value)} />
          <button onClick={handleReply}>Reply</button>
        </div>
      )}
    </div>
  );
};

export default Comment;

