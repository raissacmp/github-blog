import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { api } from "../../../../lib/axios";
import { dateFormatter } from "../../../../utils/formatter";
import search from "../../../../../src/assets/search.svg";

import {
  Post,
  PostsContainer,
  PostsContent,
  PostsPage,
  SearchForm,
  TitleContainer,
  TitleContainerSearch,
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

  async function getUserData(query = "") {
    //caso não tenha valor no input a query tem valor padrão de vazio
    const url = `/search/issues?q=${query}repo:raissacmp/github-blog`;
    const response = await api.get(url);

    setPostsData(response.data.items);
  }

  useEffect(() => {
    getUserData();
  }, []);

  //BUSCA

  const searchFormSchema = z.object({
    query: z.string(),
  });

  type SearchFormInputs = z.infer<typeof searchFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchPosts(data: SearchFormInputs) {
    //data input
    await getUserData(data.query);
  }

  return (
    <PostsPage>
      <PostsContainer>
        <section>
          <TitleContainerSearch>
            <h2>Publications</h2>
            <p>{postsData?.length} publications</p>
          </TitleContainerSearch>
          <SearchForm onSubmit={handleSubmit(handleSearchPosts)}>
            <input
              type="text"
              placeholder="Type your search term"
              {...register("query")}
            />
            <button type="submit" disabled={isSubmitting}>
              <img src={search} alt="" />
            </button>
          </SearchForm>
        </section>
        <PostsContent>
          {postsData.map((post) => {
            return (
              <Post key={post.id}>
                <NavLink to={`/post/${post.number}`}>
                  {/* mandando a informação */}
                  <TitleContainer>
                    <h1>{post.title}</h1>
                    <span>{dateFormatter(post.created_at)}</span>
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
