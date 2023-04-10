import { useRouter } from 'next/router';

const Studentid = () => {
  let {
    query: { studentid }
  } = useRouter();

  return <h1>Studentid: {studentid}</h1>;
};

export default Studentid;
