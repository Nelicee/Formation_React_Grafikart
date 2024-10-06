import users from "../data/users.json"
import possessions from "../data/possessions.json"
import { convertToDate } from "./Date";



export function deleteUser(userId, usersList) {
  return usersList.filter((user) => user.id !== userId);
}


export  function getUsers() {
  return users;
}
// augmenter les performances en mettant en 2ème paramètre la liste des utilisateurs- Utiliser context ou Redux
export function getUser(userId){
  return  users.filter((user) => user.id == userId)

}

export function getPossessions(id){
return possessions.filter((possession) => possession.idUtilisateur == id)
  
}

// export function getAge(id){

//   return users.filter((user) => user.birthdate == id)
// }
export function calculateAge(birthDate) {
  const today = new Date();
  const birth = convertToDate(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}