import { limitConcurrency } from "@vitest/runner/utils";
import { SearchableList } from "./components/SearchableList";
import React from "react";
import {useState} from "react";


const recipes = [
  { name: "Feuilles de lasagne", icon: "🍃" },
  { name: "Sauce tomate", icon: "🍅" },
  { name: "Viande végétalienne hachée", icon: "🌿" },
  { name: "Oignon", icon: "🧅" },
  { name: "Ail", icon: "🧄" },
  { name: "Épinards", icon: "🍃" },
  { name: "Tofu", icon: "🥦" },
  { name: "Fromage végétalien râpé", icon: "🧀" },
  { name: "Sel", icon: "🧂" },
  { name: "Poivre", icon: "🌶️" },
  { name: "Huile d'olive", icon: "🫒" },
];

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((v) => v + 1);
  };
  return (
    <>
      <button className="btn btn-primary mb-2" onClick={increment}>
        Compteur: {count}
      </button>
      <SearchableList
        items={recipes}
        itemRenderer={(item) => (
          <li>
            {item.name} {item.icon}
          </li>
        )}
      ></SearchableList>
    </>
  );
}
export default App;
