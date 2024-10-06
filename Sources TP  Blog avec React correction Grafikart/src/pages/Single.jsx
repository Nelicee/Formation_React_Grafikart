import {useDocumentTitle} from "../hooks/useDocumentTitle.js";
import {useFetch} from "../hooks/useFetch.js";
import {Spinner} from "../components/Spinner.jsx";
import {Alert} from "../components/Alert.jsx";
import {Card} from "../components/Card.jsx";
import {Button} from "../components/Button.jsx";
import {useToggle} from "../hooks/useToggle.js";
import {Modal} from "../components/Modal.jsx";
import {EditPostModal} from "./Single/EditPostModal.jsx";

export function Single ({postId}) {

    const {data: post, loading, error, setData} = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    useDocumentTitle(post?.title)
    const [isEditing, toggleEditing] = useToggle(false)

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <Alert type="danger">{error.toString()}</Alert>
    }

    const handleSave = (data) => {
        setData({
            ...post,
            ...data
        })
        toggleEditing()
    }

    return <>
        <h1 className="mb-3">{post.title}</h1>
        <img src={`https://picsum.photos/id/${post.id}/800/600`} alt="" className="img-fluid img-thumbnail my-3"/>
        <p>{post.body}</p>
        {isEditing && <EditPostModal
            post={post}
            onClose={toggleEditing}
            onSave={handleSave}
        />}
        <Button variant="secondary" onClick={toggleEditing}>Editer l'article</Button>
        <p>
            <a href={`#post:${post.id + 1}`}>Article suivant</a>
        </p>
    </>
}
