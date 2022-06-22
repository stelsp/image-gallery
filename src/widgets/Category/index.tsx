import { FC } from 'react';
import ButtonCategory from '../../ui/ButtonCategory';
import { useAppDispatch } from '../../services/hooks';
import { toggleCategory } from '../../store/dataSlice';

import style from './style.module.css';

const Category: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className={style.select}>
        <select onChange={(event) => dispatch(toggleCategory(event.target.value))}>
          <option value="Show All">Show All</option>
          <option value="Design">Design</option>
          <option value="Branding">Branding</option>
          <option value="Illustration">Illustration</option>
          <option value="Motion">Motion</option>
        </select>
      </div>

      <ul className={style.list}>
        <li className={style.item}>
          <ButtonCategory category="Show All" />
        </li>
        <li className={style.item}>
          <ButtonCategory category="Design" />
        </li>
        <li className={style.item}>
          <ButtonCategory category="Branding" />
        </li>
        <li className={style.item}>
          <ButtonCategory category="Illustration" />
        </li>
        <li className={style.item}>
          <ButtonCategory category="Motion" />
        </li>
      </ul>
    </>
  );
};

export default Category;
