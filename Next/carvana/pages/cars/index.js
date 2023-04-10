import carsData from "../../data/carsdata";
import CarsPage from "../../components/CarsPage";
import Categories from "../../components/template/Categories";
import Searchbar from "../../components/template/Searchbar";

const Cars = () => {
    return (
        <>
          <Searchbar />
          <Categories />
          <CarsPage data={carsData} />
        </>
    );
};

export default Cars;