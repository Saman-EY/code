import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div>THIS IS HOME</div>
      <button>
        <Link href={'/about-us'}>Aboutus</Link>
      </button>
    </div>
  );
}
