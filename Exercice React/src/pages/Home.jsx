import { useEffect, useState } from "react";
import UsersTable from "../components/UsersTable";
import { getUsers, deleteUser } from "../services/Users";

export function Home() {

  const [userslist, setUserslist] = useState([]);

  useEffect(() => {
    const users = getUsers();
    setUserslist(users)
  }, []);
 

  function deleteMyUser(id) {
    const updatedList = deleteUser(id, userslist);
    setUserslist(updatedList);
  }

  return (
    <>
      <div>Gestion des utilisateur</div>
      <UsersTable userData={userslist} deleteUser={deleteMyUser} />
    </>
  );
}
