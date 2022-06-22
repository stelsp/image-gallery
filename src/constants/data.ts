export type TItem = {
  name: string;
  image: (id: string) => string;
  category: string;
};

type Tdata = TItem[];

const data: Tdata = [
  {
    name: 'SOFA',
    image: require('../images/image1.png'),
    category: 'Design'
  },
  {
    name: 'KeyBoard',
    image: require('../images/image2.png'),
    category: 'Branding'
  },
  {
    name: 'Work Media',
    image: require('../images/image3.png'),
    category: 'Illustration'
  },
  {
    name: 'DDDone',
    image: require('../images/image4.png'),
    category: 'Motion'
  },
  {
    name: 'Abstract',
    image: require('../images/image5.png'),
    category: 'Design'
  },
  {
    name: 'HandP',
    image: require('../images/image6.png'),
    category: 'Branding'
  },
  {
    name: 'Architect',
    image: require('../images/image7.png'),
    category: 'Motion'
  },
  {
    name: 'CalC',
    image: require('../images/image8.png'),
    category: 'Design'
  },
  {
    name: 'Sport',
    image: require('../images/image9.png'),
    category: 'Branding'
  }
];

export default data;
