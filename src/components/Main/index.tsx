import { FC } from 'react';
import CardsList from '../../widgets/CardList';
import Category from '../../widgets/Category';
import style from './style.module.css';

const Main: FC = () => {
  return (
    <main className={style.main}>
      <Category />
      <CardsList />
    </main>
  );
};

export default Main;
