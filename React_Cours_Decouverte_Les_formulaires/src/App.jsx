import { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    firstname: "John",
    lastname: "Doe",
    age: 18,
  });

  const [count, setCount] = useState(0);

  const incrementAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const incrementCount = () => {
    setCount(count + 1 )
  };

  return (
    <>
      <p>
        Age de {person.firstname} : {person.age}
      </p>
      <button onClick={incrementAge}>Gagner une année</button>
      <button onClick={incrementCount}>Incrémenter {count}</button>
    </>
  );
}

export default App;
