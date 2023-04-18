import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../lib/axios";

export interface Post {
  title: string;
  body: string;
}

export function Post() {
  const { number } = useParams(); /* pegando a info da url */
  console.log("🚀 ~ file: index.tsx:4 ~ Post ~ number:", number);

  const [postData, setPostData] = useState<Post>();
  console.log("🚀 ~ file: index.tsx:12 ~ Post ~ postData:", postData);

  if (number) {
    async function getPostData() {
      const url = `/repos/raissacmp/github-blog/issues/${number}`;
      const response = await api.get(url);

      setPostData(response.data);
    }

    useEffect(() => {
      getPostData();
    }, []);
  }

  return (
    <main>
      <section>
        <h1>{postData?.title}</h1>
      </section>
      <section>
        <h1>{postData?.body}</h1>
      </section>
    </main>
  );
}
