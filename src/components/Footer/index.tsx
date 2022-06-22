import { FC } from 'react';
import ButtonLoadMore from '../../ui/ButtonLoadMore';
import style from './style.module.css';

const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <ButtonLoadMore />
    </footer>
  );
};

export default Footer;
