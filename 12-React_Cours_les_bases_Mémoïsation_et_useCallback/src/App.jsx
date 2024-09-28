import { useState, memo, useMemo, useCallback } from "react";
import { Input } from "./components/forms/Input.jsx";
import {waitSync} from "./utils/waitSync.js";

export function App() {
  const [name, setName] = useState("");

  const handleClick = useCallback(() => {
    console.log("Hello")
  },[]);

  return (
    <div className="container my-2 vstack gap-2">
      <div>
        <Input label="Prénom" onChange={setName} value={name} />
        <div>{name.toUpperCase()}</div>
      </div>
      <InfoMemo onClick={handleClick} />
      {/* <Info/> */}

    </div>
  );
}

const InfoMemo = memo(function Info({onClick}) {
// function Info () {
  waitSync(500)
  console.log('Info', 'render');
  return (
    <div className="alert alert-info" onClick={onClick}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
      possimus.
    </div>
  );
});

export default App;