import UsersTable from "./components/UsersTable.jsx";
import users from "./data/users.json";
import { useState } from "react";

function App() {
  const [userslist, setUserslist] = useState(users);

  console.log(userslist);

  function deleteUser(id) {
    console.log(userslist);
    // setUserslist((userslist)=>(userslist.filter((user) => user.id !== id)));
    console.log(userslist);
    // const newUserslist = userslist.filter((user) => user.id !== id)
    // setUserslist(newUserslist)
    setUserslist(userslist.filter((user) => user.id !== id));
    console.log(userslist);
  }

  return (
    <>
      <UsersTable userData={userslist} deleteUser={deleteUser} />
    </>
  );
}

export default App;
