import users from "../data/users.json";
export default function UsersTable() {
  return (
    <>
    
    <table className=" table table-striped table-bordered table-hover mt-4">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Adresse</th>
          <th>Téléphone</th>
          <th>Supprimer</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.nom}</td>
            <td>{user.prenom}</td>
            <td>{user.email}</td>
            <td>{user.adresse}</td>
            <td>{user.tel}</td>
            <td><button  className="btn btn-danger">Supprimer</button></td>
          </tr>
        ))}
      </tbody>
    </table>
    
    
    </>
  )
}