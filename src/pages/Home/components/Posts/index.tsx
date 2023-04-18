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

export interface Posts {
  title: string;
  body: string;
  id: number;
  created_at: string;
  number: number;
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
      <PostsContainer>
        <PostsContent>
          {postsData.map((post) => {
            return (
              <Post key={post.id}>
                <NavLink to={`/post/${post.number}`}>
                  {/* mandando a informação */}
                  <TitleContainer>
                    <h1>{post.title}</h1>
                    <span>
                      {dateFormatter.format(new Date(post.created_at))}{" "}
                    </span>
                  </TitleContainer>
                  <p>{post.body}</p>
                </NavLink>
              </Post>
            );
          })}
        </PostsContent>
      </PostsContainer>
    </PostsPage>
  );
}
