import './App.css';
import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
import Footer from './components/Layout/Footer/Footer';

const statistics = {
  statsList: [
    {
      intro: 'Brand Recognition',
      imageSrc:
        'https://res.cloudinary.com/dnagee/image/upload/v1641599524/shortly/icon-brand-recognition_ytducu.svg',
      descr:
        'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    },
    {
      intro: 'Detailed Records',
      imageSrc:
        'https://res.cloudinary.com/dnagee/image/upload/v1641599525/shortly/icon-detailed-records_yv3joy.svg',
      descr:
        'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    },
    {
      intro: 'Fully Customizable',
      imageSrc:
        'https://res.cloudinary.com/dnagee/image/upload/v1641599519/shortly/icon-fully-customizable_n7urmd.svg',
      descr:
        'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    },
  ],
  heading: 'Advanced Statistics',
  description:
    'Track how your links are performing across the web with our advanced statistics dashboard.',
};

const App = () => {
  return (
    <>
      <Header className='default-padding' />
      <Main className='default-padding' data={statistics} />
      <Footer />
    </>
  );
};

export default App;
