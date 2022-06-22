import { FC } from 'react';
import About from '../../widgets/About';
import Navigation from '../../widgets/Navigation';

import style from './style.module.css';

const Header: FC = () => {
  return (
    <header className={style.header}>
      <Navigation />
      <About />
    </header>
  );
};

export default Header;
