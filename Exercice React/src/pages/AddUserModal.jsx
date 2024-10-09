import { Modal } from "../components/Modal";

export function AddUserModal({onClose, onAddUser }) {


  const addUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
 
    const user = {
    
      nom: formData.get("nom"),
      prenom: formData.get("prenom"),
      email: formData.get("email"),
      adresse: formData.get("adresse"),
      tel: formData.get("telephone"),
      birthdate: formData.get("birthdate"),
    };
    onAddUser(user);
   
  };

  return (
    <div>
    <Modal onClose={onClose}>
      <div className="container-fluid px-2">
        <h3>Ajouter un utilisateur</h3>

        {/* <form action="" onSubmit={handleSubmit} className="vstack gap-3"> */}
        <form onSubmit={addUser} className="vstack">
          <div className="mb-1">
            <label htmlFor="nom" className="form-label">
              Nom
            </label>
            <input type="text" className="form-control" name="nom" />
          </div>
          <div className="mb-1">
            <label htmlFor="prenom" className="form-label">
              Prénom
            </label>
            <input type="text" className="form-control" name="prenom" />
          </div>
          <div className="mb-1">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" name="email" />
          </div>
          <div className="mb-1">
            <label htmlFor="adresse" className="form-label">
              Adresse
            </label>
            <input type="textarea" className="form-control" name="adresse" />
          </div>
          <div className="mb-1">
            <label htmlFor="telephone" className="form-label">
              Téléphone
            </label>
            <input type="text" className="form-control" name="telephone" />
          </div>
          <div className="mb-1">
            <label htmlFor="birthdate" className="form-label">
              Date de naissance
            </label>
            <input type="date" className="form-control" name="birthdate" />
          </div>
          <div className="text-center my-3">
            <button className="btn btn-secondary me-2"type="button" onClick={onClose} >
              Annuler
            </button>
            <button type="submit" className="btn btn-primary">
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </Modal>
    </div>
  );
}
