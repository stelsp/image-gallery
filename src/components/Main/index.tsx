import { FC } from 'react';
import { useAppSelector } from '../../services/hooks';
import ButtonLoadMore from '../../ui/ButtonLoadMore';
import Card from '../../ui/Card';
import Category from '../Category';

const Main: FC = () => {
  const { data, category } = useAppSelector((store) => store.data);

  return (
    <>
      <Category />
      <ul
        style={{
          margin: '0 auto',
          padding: '0',
          listStyle: 'none',
          maxWidth: '1600px',
          display: 'grid',
          alignItems: 'center',
          justifyContent: 'center',
          gridTemplateColumns: 'repeat(auto-fill, 370px)',
          rowGap: '32px',
          columnGap: '30px'
        }}
      >
        {category === 'All'
          ? data?.map((el, index: number) => {
              return <Card el={el} index={index} />;
            })
          : data
              ?.filter((el) => el.category === category)
              .map((el, index: number) => {
                return <Card el={el} index={index} />;
              })}
      </ul>
      <ButtonLoadMore />
    </>
  );
};

export default Main;
