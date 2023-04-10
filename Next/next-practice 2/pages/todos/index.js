import Link from 'next/link';
import { useEffect, useState } from 'react';

const Todos = () => {
  let [todos, setTodos] = useState([]);

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id}>
          <Link href={`/todos/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
