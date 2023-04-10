import { useRouter } from "next/router";

const Pricenum = () => {

    let {query: {itemnum, pricenum}} = useRouter()

    return (
        <h1>
            Pricenum... item: {itemnum} , price: {pricenum}
        </h1>
    );
};

export default Pricenum;