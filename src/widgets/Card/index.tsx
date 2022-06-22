import { FC } from 'react';
import ICard from './type';
import style from './style.module.css';

const Card: FC<ICard> = ({ el }) => {
  const item = {
    backgroundImage: `url(${el.image})`,
    border: '2px solid var(--background-color-light)'
  };

  // const toggleBorder = useMemo(() => {
  //   if (state) {
  //     item.border = '2px solid green';
  //   }
  // }, [state, item]);

  return (
    <li className={style.item} style={item}>
      <p>{el.name}</p>
      <p>{el.category}</p>
    </li>
  );
};

export default Card;
