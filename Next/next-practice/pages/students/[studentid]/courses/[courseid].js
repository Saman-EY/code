import { useRouter } from 'next/router';


const Courseid = () => {

    let {query: {studentid, courseid}} = useRouter();

    return (
        <h1>Studentid: {studentid} and courseid: {courseid}</h1>
    );
};

export default Courseid;