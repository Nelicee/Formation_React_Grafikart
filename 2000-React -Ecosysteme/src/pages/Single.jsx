import { useParams } from "react-router-dom";

export function Single() {
  const { id } = useParams();

  return (
    <div>
      <h1>Article {id}</h1>
    </div>
  );
}
