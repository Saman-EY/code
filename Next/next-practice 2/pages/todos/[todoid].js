import { useRouter } from 'next/router';

import useSWR from 'swr';

const TodoSingle = ({ data }) => {
  let router = useRouter();
  let { query } = router;
  const url = `https://jsonplaceholder.typicode.com/todos/${query.todoid}`;

  let fetcher = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((temp) => console.log(temp));
  };

  let temp = useSWR(url, fetcher);

  if (router.isFallback) {
    return <h1>loading...</h1>;
  }

  return (
    <>
      <h1>{data.title}</h1>
      <h1>{`${data.completed}`}</h1>
      <button onClick={() => fetcher(url)}>btn</button>
    </>
  );
};

export default TodoSingle;

export async function getStaticPaths() {
  return {
    paths: [
      // { params: { todoid: '1' } },
      // { params: { todoid: '2' } },
      // { params: { todoid: '3' } },
      // { params: { todoid: '4' } },
      // { params: { todoid: '5' } }
    ],
    fallback: 'blocking'
  };
}

export async function getStaticProps(context) {
  let { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoid}`
  );
  const data = await res.json();

  return {
    props: { data }
  };
}
