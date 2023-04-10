import { useRouter } from 'next/router';

const Articleslug = () => {
  let { query } = useRouter();

  let slugs = query.slugs || [];

  let router = useRouter();

  let clickHandler = () => {
    console.log("click");
    router.push("/")
  }

  if (slugs.length > 2) {
    return (
      <h1>
        name: {slugs[0]} ----- job: {slugs[1]} ----- age: {slugs[2]}
      </h1>
    );
  }

  return (
    <>
      <h1>Articles</h1>
      <button onClick={clickHandler}>get back to home</button>
    </>
  );
};

export default Articleslug;
