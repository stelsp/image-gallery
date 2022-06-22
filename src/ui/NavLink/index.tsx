import { FC } from 'react';
import INavLink from './type';
import style from './style.module.css';

const NavLink: FC<INavLink> = ({ name }) => {
  return (
    <li className={style.item}>
      <a className={style.link}>{name}</a>
    </li>
  );
};

export default NavLink;
