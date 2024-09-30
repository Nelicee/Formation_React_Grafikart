import { Button } from "../../components/Button"
import { Modal } from "../../components/Modal"
import { Input } from "../../components/Input"


export function EditPostModal({post,onClose,onSave}) {
  const handleSubmit = (e) => {
    e.preventdefault()
  }
  return <Modal>
    <h1>EDiter l'article</h1>
    <form action="" onSubmit={handleSubmit} className="vstack gap-3">
      <Input name="title" label="Titre" defaultValue={post.title}/>
       <Input name="body" label="Contenu" type="textarea" defaultValue={post.body}/>
       <Button type="submit">Sauvegarder</Button>
       <div className="hastack gap-2 flex justify-content-end ">
        <Button type="submit" variant="secondary">Annuler</Button>
        <Button type="submit">Sauvegarder</Button>
       </div>
    </form>
   
  </Modal>
}
