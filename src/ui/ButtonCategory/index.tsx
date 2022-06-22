import { FC, useCallback } from 'react';
import IButtonCategory from './type';
import { useAppDispatch } from '../../services/hooks';
import { toggleCategory } from '../../store/dataSlice';
import style from './style.module.css';

const ButtonCategory: FC<IButtonCategory> = ({ category }) => {
  const dispatch = useAppDispatch();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch(toggleCategory(category));
  }, [dispatch, category]);

  return (
    <button className={style.button} onClick={handleClick}>
      {category}
    </button>
  );
};

export default ButtonCategory;
