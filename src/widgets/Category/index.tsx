import { FC } from 'react';
import ButtonCategory from '../../ui/ButtonCategory';
import { useAppDispatch } from '../../services/hooks';
import { toggleCategory } from '../../store/dataSlice';

import style from './style.module.css';

const Category: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <select
        className={style.select}
        onChange={(event) => dispatch(toggleCategory(event.target.value))}
      >
        <option>
          <ButtonCategory category="All" />
        </option>
        <option value="Design" onClick={() => dispatch(toggleCategory('Design'))}>
          <ButtonCategory category="Design" />
        </option>
        <option value="Branding">
          <ButtonCategory category="Branding" />
        </option>
        <option value="Illustration">
          <ButtonCategory category="Illustration" />
        </option>
        <option value="Motion">
          <ButtonCategory category="Motion" />
        </option>
      </select>

      {/* <ul className={style.list}>
        <li>
          <ButtonCategory category="All" />
        </li>
        <li>
          <ButtonCategory category="Design" />
        </li>
        <li>
          <ButtonCategory category="Branding" />
        </li>
        <li>
          <ButtonCategory category="Illustration" />
        </li>
        <li>
          <ButtonCategory category="Motion" />
        </li>
      </ul> */}
    </>
  );
};

export default Category;
