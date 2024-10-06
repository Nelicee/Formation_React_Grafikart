import { useParams } from "react-router-dom";
import { getPossessions, getUser } from "../services/Users";

export default function Single() {
  const { userId } = useParams();

  const user = getUser(userId)[0];

  const userPossessions = getPossessions(userId);

  return (
    <>
      <div className="container ">
        <div className="col-md-6">
          <h4 className="mt-4">
            Voici les détails de {user.nom} {user.prenom}
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Date de naissance :</strong> {user.birthdate}
            </li>
            <li className="list-group-item">
              <strong>Adresse :</strong> {user.adresse}
            </li>
            <li className="list-group-item">
              <strong>Email :</strong> exemple@email.com
            </li>
            <li className="list-group-item">
              <strong>Téléphone :</strong> +33 1 23 45 67 89
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-4">
        <h4>Voici la liste de ses possessions:</h4>
        <table className=" container table table-striped table-bordered table-hover mt-4">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Valeur</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {userPossessions.map((userPossession) => (
              <tr key={userPossession.id}>
                <td>{userPossession.nom}</td>
                <td>{userPossession.valeur}</td>
                <td>{userPossession.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
