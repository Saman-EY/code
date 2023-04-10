import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button>
        <Link href="/users">USERS</Link>
      </button>
      <button>
        <Link href="/albums">ALBUMS</Link>
      </button>
      <button>
        <Link href="/todos">Todos</Link>
      </button>
    </div>
  );
}

// YOU CAN USE ARROW FUNCTION OR NORMAL FUNCTION FOR GET STATIC PROPS (SSG) OR GET SERVER SIDE PROPS (SSR) *
