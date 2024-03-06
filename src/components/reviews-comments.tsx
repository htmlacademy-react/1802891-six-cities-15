import { Comment } from '../types/comment';
import ReviewItem from './review-item';

type ListCommentsProps = {
  comments: Comment[];
}

export default function ReviewsComments({ comments }: ListCommentsProps) {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <ReviewItem key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}
