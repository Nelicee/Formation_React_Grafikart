import { useId, useMemo, useState } from "react";
import { Input } from "./components/forms/input";

function App() {
  const [firstname, setFirstname] = useState("John");
  const [password, setPassword] = useState("MotDePasse");
  const security = useMemo(() => {
    return passwordSecurity(password)
  }, [password])
  console.log(useId())

  return (
    <div className="container my-3 vstack gap-2">
      <Input
        label="Nom d'utilisateur"
        value={firstname}
        onChange={setFirstname}
      />
      <div>
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={setPassword}
        />
        Sécurité: {security}
      </div>
    </div>
  );
}
function passwordSecurity (password){



  if (password.length<3) {
// fausse lenteur
let startTime = performance.now();
while (performance.now() - startTime < 200) {}

    return 'faible'
  } else if (password.length <6) {
    return 'Moyen'
  }
  return 'Fort'
}

export default App;
