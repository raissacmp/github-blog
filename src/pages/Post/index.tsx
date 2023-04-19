import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../lib/axios";

import githubIcon from "../../../src/assets/githubIcon.svg";
import calendarIcon from "../../../src/assets/calendarIcon.svg";
import commentsIcon from "../../../src/assets/commentsIcon.svg";
import externalLink from "../../../src/assets/externalLink.svg";
import backIcon from "../../../src/assets/backIcon.svg";

import { MainPostContent } from "./styles";

interface Post {
  title: string;
  body: string;
  user: User;
  comments: number;
  created_at: string;
}

interface User {
  login: string;
}

export function Post() {
  const [postData, setPostData] = useState<Post>();

  const { number } = useParams(); /* pegando a info da url */

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
    <>
      {postData && (
        <main>
          <MainPostContent>
            <nav>
              <ul>
                <li>
                  <img src={backIcon} alt="" />
                  <a href="/">Back</a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href={`https://github.com/raissacmp/github-blog/issues/${number}`}
                  >
                    See on Github
                  </a>
                  <img src={externalLink} alt="" />
                </li>
              </ul>
            </nav>
            <header>
              <h1>{postData.title}</h1>
            </header>
            <div>
              <div>
                <span>
                  <img src={githubIcon} alt="" />
                  {postData.user.login}
                </span>
              </div>
              <div>
                <img src={calendarIcon} alt="" />
                <span>{postData.created_at}</span>
              </div>
              <div>
                <img src={commentsIcon} alt="" />
                <span>{postData.comments}</span>
              </div>
            </div>
          </MainPostContent>
          <article>
            <p>{postData.body}</p>
          </article>
        </main>
      )}
    </>
  );
}
