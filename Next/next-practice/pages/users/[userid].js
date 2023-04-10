import { useRouter } from "next/router";
const User = () => {

    let {query: {userid}} = useRouter();
    console.log(userid);

    return (
        <h1>
            user # {userid}
        </h1>
    );
};

export default User;