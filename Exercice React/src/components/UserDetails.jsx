// import { useParams } from "react-router-dom"

// export default function UserDetails() {
//   return (
//     <>
    
//     <table className=" container table table-striped table-bordered table-hover mt-4">

      
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Nom</th>
//           <th>Prénom</th>
//           <th>Email</th>
//           <th>Adresse</th>
//           <th>Téléphone</th>
//           <th >Supprimer</th>
//         </tr>
//       </thead>
//       <tbody>
//         {userData.map((user) => (
//           <tr key={user.id}>
//               <td>{user.id}</td>
//             <td><Link to={`users/${user.id}`}>{user.nom}</Link></td>
//             <td>{user.prenom}</td>
//             <td>{user.email}</td>
//             <td>{user.adresse}</td>
//             <td>{user.tel}</td>
//             <td><button onClick={() => deleteUser(user.id)}  className="btn btn-danger">Supprimer</button></td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
    
//     </>
//   )
// }
