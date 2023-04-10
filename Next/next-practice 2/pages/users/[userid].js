import { useRouter } from 'next/router';

// SSG PAGE *

const SingleUser = ({ data }) => {
  let router = useRouter();

  if (router.isFallback) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <h1>USER DETAIL</h1>
      <h2>{data.name}</h2>
      <h3>{data.email}</h3>
    </>
  );
};

export default SingleUser;

export async function getStaticPaths() {
  let res = await fetch('https://jsonplaceholder.typicode.com/users');
  let temp = await res.json();

  // FOR FALLBACK: TRUE OF BLOCKING *
  // let data = temp.slice(0, 4);
  let data = temp;

  let paths = data.map((user) => ({
    params: {
      // NO NUMBER TYPE FOR THIS *
      userid: user.id.toString()
    }
  }));

  return {
    paths,
    // WE SHOULD NOT DO THIS HARDCODE *
    // paths: [
    //   { params: { userid: '1' } },
    //   { params: { userid: '2' } },
    //   { params: { userid: '3' } },
    //   { params: { userid: '4' } },
    //   { params: { userid: '5' } },
    //   { params: { userid: '6' } },
    //   { params: { userid: '7' } },
    //   { params: { userid: '8' } },
    //   { params: { userid: '9' } },
    //   { params: { userid: '10' } }
    // ],

    fallback: false

    // fallback: true
    // fallback: "blocking"
  };
}

export async function getStaticProps(context) {
  let { params } = context;

  let res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userid}`
  );
  let data = await res.json();

  // FOR FALLBACK: TRUE OF BLOCKING *
  // if (Object.keys(data).length === 0) {
  //   return {
  //     notFound: true
  //   };
  // }

  return {
    props: {
      data
    },

    // ISR *
    revalidate: 10

    // REDIRECT *
    // redirect: {destination: "/"}
  };
}
