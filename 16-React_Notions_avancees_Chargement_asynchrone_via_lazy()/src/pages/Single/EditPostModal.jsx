import { Modal } from "../../components/Modal.jsx";
import { Button } from "../../components/Button.jsx";
import { Input } from "../../components/Input.jsx";
import { useState } from "react";
import { Alert } from "../../components/Alert.jsx";

export function EditPostModal({ post, onClose, onSave }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const data = new FormData(e.target);
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "PUT",
      body: data,
    })
      .then((r) => r.json())
      .then((r) => {
        onSave(Object.fromEntries(data.entries()))
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  return (
    <Modal onClose={onClose}>
      <h1>Editer l'article </h1>
      {error && <Alert type="danger">{error.toString()}</Alert>}
      <form action="" onSubmit={handleSubmit} className="vstack gap-3">
        <Input name="title" label="Titre" defaultValue={post.title} />
        <Input
          name="body"
          label="Contenu"
          type="textarea"
          defaultValue={post.body}
        />
        <div className="hstack gap-2 justify-content-end">
          <Button
            disabled={loading}
            type="button"
            variant="secondary"
            onClick={onClose}
          >
            Annuler
          </Button>
          <Button disabled={loading} type="submit">
            Sauvegarder
          </Button>
        </div>
      </form>
    </Modal>
  );
}
