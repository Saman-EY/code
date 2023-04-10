import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Home</h1>
      <p>where do you wanna go?</p>
      <Link href={`/products`}>
        <button>products</button>
      </Link>
      <Link href={`/students`}>
        <button>students</button>
      </Link>
      <Link href={`/users`}>
        <button>users</button>
      </Link>
      <Link href={`/articles`}>
        <button>article</button>
      </Link>
    </div>
  );
}
