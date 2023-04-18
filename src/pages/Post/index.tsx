import { useParams } from "react-router-dom";
export function Post() {
  const params = useParams(); /* pegando a info da url */
  console.log("🚀 ~ file: index.tsx:4 ~ Post ~ params:", params);

  return (
    <div>
      <h1>POST</h1>
    </div>
  );
}
