import { FC } from 'react';
import ButtonContact from '../../ui/ButtonContact';
import Logo from '../../ui/Logo';
import NavLink from '../../ui/NavLink';
import style from './style.module.css';

const Navigation: FC = () => {
  return (
    <div className={style.container}>
      <Logo />
      <nav className={style.nav}>
        <ul className={style.list}>
          <NavLink name="About" />
          <NavLink name="Services" />
          <NavLink name="Pricing" />
          <NavLink name="Blog" />
        </ul>
      </nav>
      <ButtonContact />
    </div>
  );
};

export default Navigation;
