export default function Star(countStar: number) {
  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" defaultValue={countStar} id={`${countStar}-stars`} type="radio" />
      <label htmlFor={`${countStar}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}
