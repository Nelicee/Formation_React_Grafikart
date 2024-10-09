import { useEffect, useState } from "react";
import UsersTable from "../components/UsersTable";
import { getUsers, deleteUser, addUser } from "../services/Users";
import { useToggle } from "../hooks/useToggle";
import { AddUserModal } from "./AddUserModal";

export function Home() {
  const [userslist, setUserslist] = useState([]);
  const [isAdded, toggleAdd] = useToggle(false);

  useEffect(() => {
    const users = getUsers();
    setUserslist(users);
  }, []);

  function deleteMyUser(id) {
    const updatedList = deleteUser(id, userslist);
    setUserslist(updatedList);
  }
  function addMyUser(user) {
    const updatedList = addUser(user, userslist);
    // setUserslist(userslist=>[...userslist,user]);
    setUserslist(updatedList);
  }

  return (
    <>
      <div>Gestion des utilisateur</div>

      {isAdded && (
        <AddUserModal
          onClose={toggleAdd}
          onAddUser={addMyUser}
          // onSave={handleSave}
        />
      )}
      <button onClick={toggleAdd} className="btn btn-success my-3 py-1">
        Ajouter un utilisateur
      </button>
      <UsersTable userData={userslist} deleteUser={deleteMyUser} />
  
    </>
  );
}
