import { FC } from 'react';
import ICard from './type';

const Card: FC<ICard> = ({ el, index }) => {
  return (
    <li
      style={{
        margin: '0px',
        padding: '0px',
        width: '370px',
        height: '416px',
        backgroundImage: `url(${el.image})`
      }}
      key={index}
    >
      <p>{index > 8 ? `${el.name} 2` : el.name}</p>
      <p>{el.category}</p>
    </li>
  );
};

export default Card;
