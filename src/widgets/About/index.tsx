import { FC } from 'react';
import style from './style.module.css';

const About: FC = () => {
  return (
    <div className={style.container}>
      <h1 className={style.heading}>Portfolio</h1>
      <p className={style.text}>
        Agency provides a full service range including technical skills, design, business
        understanding.
      </p>
    </div>
  );
};

export default About;
