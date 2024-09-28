// import { useState } from "react";
import { useIncrement } from "./hooks/useIncrement";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import { Input } from "./components/forms/Input";
import {useFetch} from "./hooks/useFetch";

function App() {
  // const [checked, toggleCheck] = useToggle();

  // const { count, increment, decrement } = useIncrement({
  //   base: 0,
  //   max: 10,
  //   min: 0,
  // });

  // const [name, setName] = useState("");
  // useDocumentTitle(name ? "Editer ${name}" : null);

  const {loading, data, errors} = useFetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=2000"
  );

  return (
    // <div>
    /* <input type="checkbox" value={checked} onChange={toggleCheck} />
      {checked && "Je suis cochée"} */

    /* <Input value={name} onChange={setName} label="Nom" />
      Compteur {count}
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button> */
    // </div>
    <div className="container my-2">
      {loading && <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
        </div>}
      {errors && 
        <div className="alert alert-danger">
          {errors.toString()}
        </div>}
      {data && 
        <div>
          <ul>
            {data.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>}
    </div>
  );
}

export default App;
