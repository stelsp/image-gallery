import { FC, useCallback, useEffect } from 'react';
import ICard from './type';
import style from './style.module.css';
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { selectCard, deleteCard, toggleCategory } from '../../store/dataSlice';

const Card: FC<ICard> = ({ el }) => {
  const dispatch = useAppDispatch();
  const { selectedCard } = useAppSelector((store) => store.data);

  useEffect(() => {
    function closeOnEsc(e: KeyboardEvent) {
      if (e.key === 'Del' || e.key === 'Delete') {
        dispatch(deleteCard());
      }
    }
    document.addEventListener('keyup', closeOnEsc);

    return () => {
      document.removeEventListener('keyup', closeOnEsc);
    };
  }, [dispatch, el._id]);

  const handleClick = useCallback(() => {
    if (selectedCard?._id !== el._id) dispatch(selectCard(el._id));
    if (selectedCard?._id === el._id) dispatch(selectCard(null));
  }, [dispatch, el._id, selectedCard]);

  const handleToggle: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (e) => {
      e.stopPropagation();
      dispatch(toggleCategory(el.category));
    },
    [dispatch, el.category]
  );

  return (
    <li
      className={`${style.item} ${
        selectedCard && selectedCard._id === el._id ? style.active : style.inactive
      }`}
      style={{ backgroundImage: `url(${el.image})` }}
      onClick={handleClick}
    >
      <h3 className={style.heading}>{el.name}</h3>
      <button className={style.button} onClick={handleToggle}>
        {el.category}
      </button>
    </li>
  );
};

export default Card;
