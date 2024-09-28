/**
 * 
 * @param {string} placeholder
 * @param {string} value
 * @param {s: string => void } onChange
 */

import { useId } from "react";


export function Input({placeholder, value, onChange, label, inputRef}) {
  console.log('input',inputRef)
  const id = useId()
  return (
    <div>
      <label className="form-label" htmlFor="{id}">{label}</label>
      <input 
      ref={inputRef}
      id={id}
      className="form-control" 
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}/>
    </div>
  );
}
