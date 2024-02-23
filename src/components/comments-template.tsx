import { ChangeEvent, useState } from 'react';
import Star from './star';

type CommentsTemplateProps = {
  countStar: number;
}

export default function CommentsTemplate({ countStar }: CommentsTemplateProps) {
  const [state, setState] = useState({ text: '' });

  const createStars = () => {
    const stars: JSX.Element[] = [];
    for (let i = countStar; i > 0; i--) {
      stars.push(Star(i));
    }

    return stars;
  };

  const onInputCommentKeyDown = ({ target }: ChangeEvent<HTMLTextAreaElement>) => {
    setState({ ...state, text: target.value });
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {createStars()}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" defaultValue={""} onChange={onInputCommentKeyDown} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}
