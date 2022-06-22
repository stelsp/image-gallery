import { FC } from 'react';
import { useAppDispatch } from '../../services/hooks';
import { loadMore } from '../../store/dataSlice';

const ButtonLoadMore: FC = () => {
  const dispatch = useAppDispatch();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(loadMore());
  };
  return <button onClick={handleClick}>LOAD MORE</button>;
};

export default ButtonLoadMore;
