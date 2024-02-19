import { Link } from 'react-router-dom';
import { AppRoute } from '../const';

const divStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  textAlign: 'center'
};

export default function NotFoundPage() {
  return (
    <div style={divStyle}>
      <h1>404 Not Found</h1>
      <Link to={AppRoute.Main}>
        <p>На глваную страницу</p>
      </Link>
    </div>
  );
}
