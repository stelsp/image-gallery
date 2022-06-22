import { FC } from 'react';
import { useAppDispatch } from '../../services/hooks';
import { loadMore } from '../../store/dataSlice';
import style from './style.module.css';

const ButtonLoadMore: FC = () => {
  const dispatch = useAppDispatch();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(loadMore());
  };
  return (
    <button className={style.button} onClick={handleClick}>
      load more
    </button>
  );
};

export default ButtonLoadMore;
