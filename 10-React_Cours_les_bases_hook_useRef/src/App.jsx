import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Input } from "./components/forms/input";

function App() {

  const prefixref = useRef()
  const [prefix, setPrefix] = useState('')
  prefixref.current = prefix

useEffect(() => {
  const timer = setInterval(()=> {
    console.log(prefixref.current)
  }, 1000)
  return () => {
    clearInterval(timer)
  }

},[]);

  return <div>
    <Input ref={inputRef} label="prefix"  />
  
  </div>
}

export default App;
