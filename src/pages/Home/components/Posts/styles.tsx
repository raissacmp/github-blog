import styled from "styled-components";

export const PostsPage = styled.div`
  a {
    text-decoration: none;
  }
`;

export const PostsContainer = styled.main`
  max-width: 864px;
  margin: 0 auto;
  padding-bottom: 200px;
`;

export const PostsContent = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
`;

export const Post = styled.section`
  background: #112131;
  border-radius: 10px;
  padding: 32px;
  cursor: pointer;
  border: 2px solid transparent;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: ${(props) => props.theme["text"]};
  }

  &:hover {
    border: 2px solid ${(props) => props.theme["label"]};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;

  h1 {
    height: 60px;
    color: ${(props) => props.theme["title"]};
    font-size: 20px;
  }

  span {
    font-size: 10px;
    color: ${(props) => props.theme["span"]};
  }
`;
