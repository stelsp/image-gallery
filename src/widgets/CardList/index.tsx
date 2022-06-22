import { FC } from 'react';
import { useAppSelector } from '../../services/hooks';
import Card from '../Card';
import style from './style.module.css';

const CardsList: FC = () => {
  const { data, category } = useAppSelector((store) => store.data);

  return (
    <ul className={style.list}>
      {category === 'Show All'
        ? data?.map((el) => {
            return <Card key={el._id} el={el} />;
          })
        : data
            ?.filter((el) => el.category === category)
            .map((el) => {
              return <Card key={el._id} el={el} />;
            })}
    </ul>
  );
};

export default CardsList;
