import { useRouter } from 'next/router';
import React from 'react';
import CarsList from '../../components/CarsList';
import carsData from "../../data/carsdata"

const FilteredCars = () => {

    let router = useRouter();
    let {query: {slugs}} = router;
    let [min, max] = slugs || [];

    let data = carsData.filter((item) => item.price > min && item.price < max);
    console.log(data);



    return (
        <div>
            <CarsList data={data} />
            {
                !data.length && <h2 style={{textAlign: "center"}}>Nothing found</h2>
            }
        </div>
    );
};

export default FilteredCars;