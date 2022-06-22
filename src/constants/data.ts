import { nanoid } from '@reduxjs/toolkit';

export type TItem = {
  name: string;
  image: (id: string) => string;
  category: string;
  _id: string;
  selected?: boolean;
};

export type Tdata = TItem[];

const data: Tdata = [
  {
    name: 'SOFA',
    image: require('../images/image1.png'),
    category: 'Design',
    _id: nanoid()
  },
  {
    name: 'KeyBoard',
    image: require('../images/image2.png'),
    category: 'Branding',
    _id: nanoid()
  },
  {
    name: 'Work Media',
    image: require('../images/image3.png'),
    category: 'Illustration',
    _id: nanoid()
  },
  {
    name: 'DDDone',
    image: require('../images/image4.png'),
    category: 'Motion',
    _id: nanoid()
  },
  {
    name: 'Abstract',
    image: require('../images/image5.png'),
    category: 'Design',
    _id: nanoid()
  },
  {
    name: 'HandP',
    image: require('../images/image6.png'),
    category: 'Branding',
    _id: nanoid()
  },
  {
    name: 'Architect',
    image: require('../images/image7.png'),
    category: 'Motion',
    _id: nanoid()
  },
  {
    name: 'CalC',
    image: require('../images/image8.png'),
    category: 'Design',
    _id: nanoid()
  },
  {
    name: 'Sport',
    image: require('../images/image9.png'),
    category: 'Branding',
    _id: nanoid()
  }
];

export default data;
