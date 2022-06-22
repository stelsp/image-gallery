import { FC } from 'react';
import { useAppDispatch } from '../../services/hooks';
import { toggleCategory } from '../../store/dataSlice';

const Category: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleCategory('All'))}>All</button>
      <button onClick={() => dispatch(toggleCategory('Design'))}>Design</button>
      <button onClick={() => dispatch(toggleCategory('Branding'))}>Branding</button>
      <button onClick={() => dispatch(toggleCategory('Illustration'))}>Illustration</button>
      <button onClick={() => dispatch(toggleCategory('Motion'))}>Motion</button>
    </div>
  );
};

export default Category;
