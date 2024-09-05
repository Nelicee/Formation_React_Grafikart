import { useState } from "react";

function App() {

  const [IsTermAccepted, SetIsTermAccepted] = useState(false)
  return (
    <form>
      <CGUCheckBox checked={IsTermAccepted} onCheck={SetIsTermAccepted}/>
      <button disabled={!IsTermAccepted}>Envoyer le formulaire</button>
    </form>
  );
}

function CGUCheckBox({ checked,onCheck }) {
  return (
    <div>
      <label>
        <input type="checkbox" 
        onChange={(e) => onCheck(e.target.checked)}
        checked={checked} />
        Accepter les conditions d'utilisation
      </label>
    </div>
  );
}

export default App;
