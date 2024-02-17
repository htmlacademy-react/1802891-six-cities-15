type TRating = {
  ratingClass: string;
  isRatingValue?: boolean;
}

export default function Rating({ ratingClass, isRatingValue }: TRating) {
  return (
    <div className={`${ratingClass}__rating rating`}>
      <div className={`${ratingClass}__stars rating__stars`}>
        <span style={{ width: '80%' }}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {isRatingValue ?
        <span className="offer__rating-value rating__value">4.8</span> : ''}
    </div>
  );
}
