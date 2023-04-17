import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../../../lib/axios";
import { dateFormatter } from "../../../../utils/formatter";

import {
  Post,
  PostsContainer,
  PostsContent,
  PostsPage,
  TitleContainer,
} from "./styles";

interface Posts {
  title: string;
  body: string;
  id: number;
  created_at: string;
}

export function Posts() {
  const [postsData, setPostsData] = useState<Posts[]>([]);

  async function getUserData() {
    const url = "/repos/raissacmp/github-blog/issues";
    const response = await api.get(url);

    setPostsData(response.data);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <PostsPage>
      <NavLink to={"/post"}>
        <PostsContainer>
          <PostsContent>
            {postsData.map((post) => {
              return (
                <Post key={post.id}>
                  <TitleContainer>
                    <h1>{post.title}</h1>
                    <span>
                      {dateFormatter.format(new Date(post.created_at))}{" "}
                    </span>
                  </TitleContainer>
                  <p>{post.body}</p>
                </Post>
              );
            })}
          </PostsContent>
        </PostsContainer>
      </NavLink>
    </PostsPage>
  );
}
