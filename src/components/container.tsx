import { ReactNode } from 'react';
import Header from './header';

type TContainerProps = {
  children: ReactNode;
  pageClass?: string;
  mainClass?: string;
  navigation?: boolean;
}

export default function Container({ children, pageClass, mainClass, navigation }: TContainerProps) {
  return (
    <div className={`page ${pageClass ? pageClass : ''}`}>
      <Header navigation />
      <main className={`page__main page__main--${mainClass ? mainClass : ''}`}>
        {children}
      </main>
    </div>

  );
}
