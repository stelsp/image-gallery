import { FC } from 'react';
import { useAppSelector } from '../../services/hooks';
import Card from '../Card';
import style from './style.module.css';

const CardsList: FC = () => {
  const { data, category } = useAppSelector((store) => store.data);
  // const test = data.forEach((el) => (el.name = `${el.name} 2`));
  // console.log(test);

  return (
    <ul className={style.list}>
      {category === 'All'
        ? data?.map((el, index) => {
            return <Card el={el} index={index} />;
          })
        : data
            ?.filter((el) => el.category === category)
            .map((el, index) => {
              return <Card el={el} index={index} />;
            })}
    </ul>
  );
};

export default CardsList;
