// CommentSection.js
import React, { useState } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentSection = () => {
  const [comments, setComments] = useState([]);

  const handleDelete = (commentId) => {
    const updatedComments = comments.filter((comment) => comment.id !== commentId);
    setComments(updatedComments);
  };

  const handleReply = (parentId, replyContent, level) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [
            ...comment.replies,
            { id: Math.random(), text: replyContent, level: level + 1, replies: [], starred: false },
          ],
        };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleToggleStar = (commentId) => {
    const updatedComments = comments.map((comment) => {
      if (comment.id === commentId) {
        return { ...comment, starred: !comment.starred };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleCommentSubmit = (commentContent) => {
    setComments([...comments, { id: Math.random(), text: commentContent, level: 0, replies: [], starred: false }]);
  };

  return (
    <div>
      <h3 id='comment-heading'>What's on your mind?</h3>
      <CommentForm onSubmit={handleCommentSubmit} />
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} onDelete={handleDelete} onReply={handleReply} onToggleStar={handleToggleStar} />
      ))}
    </div>
  );
};

export default CommentSection;
