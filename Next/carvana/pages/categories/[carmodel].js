import carsData from '../../data/carsdata';
import { useRouter } from 'next/router';
import CarsList from '../../components/CarsList';
const SingleModelCar = () => {
  let router = useRouter();

  if (!router) return null;

  let {
    query: { carmodel }
  } = router;
  console.log(carmodel);

  let data = carsData.filter((item) => {
    return item.category === carmodel;
  });
  console.log(data);

  return (
    <CarsList data={data} />
  )
};

export default SingleModelCar;
