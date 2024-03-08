type LocationProps = {
  city: string;
}

export default function Location({ city }: LocationProps) {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

