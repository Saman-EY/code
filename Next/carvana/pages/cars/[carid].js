import CarDetails from '../../components/CarDetails';
import { useRouter } from 'next/router';
import carsdata from '../../data/carsdata';

const CarSinglePage = () => {
  let {
    query: { carid }
  } = useRouter();


  let data = carsdata[carid - 1];

  return <>
    <CarDetails {...data} />
  </>;
};

export default CarSinglePage;
