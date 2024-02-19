import MainPage from '../pages/main-page';

type TAppProps = {
  count: number;
}

export default function App({ count }: TAppProps) {
  return (
    <MainPage count={count} />
  );
}
