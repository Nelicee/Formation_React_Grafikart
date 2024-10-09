import users from "../data/users.json"
import possessions from "../data/possessions.json"
import { convertToDate } from "./Date";



export function deleteUser(userId, usersList) {
  return usersList.filter((user) => user.id !== userId);
}



export function addUser(user, usersList) {
  const maxId = Math.max(...usersList.map(u => u.id), 0);
  const newUser = { ...user, id: maxId + 1 };
  return [...usersList, newUser];
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

export function calculateAge(birthDate) {
  const today = new Date();

  // Vérifie si la date contient des "/" pour déterminer si on doit utiliser convertToDate
  const birth = birthDate.includes('/') ? convertToDate(birthDate) : new Date(birthDate);

  // Vérification si la date est valide
  if (isNaN(birth.getTime())) {
    return 'Date invalide'; // Gérer le cas d'une date non valide
  }

  // Calcul de l'âge
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();

  // Ajuste l'âge si la date d'anniversaire n'est pas encore passée cette année
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}
