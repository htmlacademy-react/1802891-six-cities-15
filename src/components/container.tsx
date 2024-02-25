import { ReactNode } from 'react';
import Header from './header';
import clsx from 'clsx';

type TContainerProps = {
  children: ReactNode;
  pageClass?: string;
  mainClass: string;
  navigation?: boolean;
}

export default function Container({ children, pageClass, mainClass, navigation = true }: TContainerProps) {
  return (
    <div className={clsx('page', pageClass && pageClass)}>
      <Header navigation={navigation} />
      <main className={clsx('page__main page__main--', mainClass && mainClass)}>
        {children}
      </main>
    </div>

  );
}
