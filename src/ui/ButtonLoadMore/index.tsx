import { FC } from 'react';
import { loadMore } from '../../store/dataSlice';
import { useAppDispatch } from '../../services/hooks';

const ButtonLoadMore: FC = () => {
  const dispatch = useAppDispatch();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(loadMore());
  };
  return <button onClick={handleClick}>LOAD MORE</button>;
};

export default ButtonLoadMore;
