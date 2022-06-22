export type TItem = {
  name: string;
  image: (id: string) => string;
  category: string;
  _id: number;
};

type Tdata = TItem[];

const data: Tdata = [
  {
    name: 'SOFA',
    image: require('../images/image1.png'),
    category: 'Design',
    _id: 1
  },
  {
    name: 'KeyBoard',
    image: require('../images/image2.png'),
    category: 'Branding',
    _id: 2
  },
  {
    name: 'Work Media',
    image: require('../images/image3.png'),
    category: 'Illustration',
    _id: 3
  },
  {
    name: 'DDDone',
    image: require('../images/image4.png'),
    category: 'Motion',
    _id: 4
  },
  {
    name: 'Abstract',
    image: require('../images/image5.png'),
    category: 'Design',
    _id: 5
  },
  {
    name: 'HandP',
    image: require('../images/image6.png'),
    category: 'Branding',
    _id: 6
  },
  {
    name: 'Architect',
    image: require('../images/image7.png'),
    category: 'Motion',
    _id: 7
  },
  {
    name: 'CalC',
    image: require('../images/image8.png'),
    category: 'Design',
    _id: 8
  },
  {
    name: 'Sport',
    image: require('../images/image9.png'),
    category: 'Branding',
    _id: 9
  }
];

export default data;
