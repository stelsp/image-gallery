import { FC } from 'react';
import ButtonCategory from '../../ui/ButtonCategory';

const Category: FC = () => {
  return (
    <div>
      <ButtonCategory category="All" />
      <ButtonCategory category="Design" />
      <ButtonCategory category="Branding" />
      <ButtonCategory category="Illustration" />
      <ButtonCategory category="Motion" />
    </div>
  );
};

export default Category;
