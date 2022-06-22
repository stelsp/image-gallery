import { FC, useCallback } from 'react';
import { useAppDispatch } from '../../services/hooks';
import { toggleCategory } from '../../store/dataSlice';

interface IButtonCategory {
  category: string;
}

const ButtonCategory: FC<IButtonCategory> = ({ category }) => {
  const dispatch = useAppDispatch();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch(toggleCategory(category));
  }, [dispatch, category]);

  return <button onClick={handleClick}>{category}</button>;
};

export default ButtonCategory;
