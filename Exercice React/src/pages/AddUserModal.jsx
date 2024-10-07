
import { Modal } from "../components/Modal";


export function AddUserModal({ post, onClose, onSave }) {
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {};

  function addUser(formData) {
    const user = {
      id: 5,
      nom: formData.get("nom"),
      prenom: formData.get("prenom"),
      email: formData.get("email"),
      adresse: formData.get("adresse"),
      tel: formData.get("telephone"),
      birthdate: formData.get("birthdate"),
    };
    console.log(user);
  }

  return (
    <Modal onClose={onClose}>
      <h1>Ajouter un utilisateur</h1>

      {/* <form action="" onSubmit={handleSubmit} className="vstack gap-3"> */}
      <form action={addUser} className="vstack gap-2">
        <div className="mb-1">
          <label htmlFor="nom" className="form-label">
            Nom
          </label>
          <input type="text" className="form-control" id="nom" />
        </div>
        <div className="mb-1">
          <label htmlFor="prenom" className="form-label">
            Prénom
          </label>
          <input type="text" className="form-control" id="prenom" />
        </div>
        <div className="mb-1">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-1">
          <label htmlFor="adresse" className="form-label">
            Adresse
          </label>
          <input type="textarea" className="form-control" id="adresse" />
        </div>
        <div className="mb-1">
          <label htmlFor="telephone" className="form-label">
            Téléphone
          </label>
          <input type="text" className="form-control" id="telephone" />
        </div>
        <div className="mb-1">
          <label htmlFor="birthdate" className="form-label">
            Date de naissance
          </label>
          <input type="date" className="form-control" id="birthdate" />
        </div>
        <button type="submit" className="btn btn-primary">
          Soumettre
        </button>
      </form>
    </Modal>
  );
}



