import { useRouter } from 'next/router';
import DetailsPage from "../../components/templates/DetailsPage"
import Loading from '../../components/templates/Loading';

const Details = ({data}) => {
  let router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }

  return <DetailsPage {...data} />
};

export default Details;

export async function getStaticPaths() {
  const res = await fetch(`${process.env.BASE_URL}/data`);
  const json = await res.json();
  const data = json.slice(0, 4);
  const paths = data.map((item) => ({ params: { id: item.id.toString() } }));

  return {
    paths,
    fallback: true
  };
}

export async function getStaticProps(context) {
  let {
    params: { id }
  } = context;

  const res = await fetch(`${process.env.BASE_URL}/data/${id}`);
  const data = await res.json();

  if (!Object.keys(data).length) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      data
    }
  };
}
