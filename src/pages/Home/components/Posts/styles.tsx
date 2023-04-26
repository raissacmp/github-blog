import styled from "styled-components";

export const PostsPage = styled.div`
  a {
    text-decoration: none;
  }
`;

export const PostsContainer = styled.main`
  max-width: 54rem;
  margin: 0 auto;
  padding-bottom: 12.5rem;
`;

export const PostsContent = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

export const Post = styled.section`
  background: #112131;
  border-radius: 0.625rem;
  padding: 2rem;
  cursor: pointer;
  border: 0.125rem solid transparent;

  p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    color: ${(props) => props.theme["text"]};
  }

  &:hover {
    border: 0.125rem solid ${(props) => props.theme["label"]};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: baseline;

  h1 {
    height: 3.75rem;
    color: ${(props) => props.theme["title"]};
    font-size: 1.25rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["span"]};
    white-space: nowrap;
    margin-left: 1rem;
  }
`;

//busca

export const SearchForm = styled.form`
  display: flex;
  width: 100%;
  margin: 0.75rem 0rem 3rem 0rem;

  input {
    width: 100%;
    background: ${(props) => props.theme["input"]};
    border: 0.0625rem solid ${(props) => props.theme["border"]};
    border-radius: 0.375rem;
  }

  input::placeholder {
    color: ${(props) => props.theme["label"]};
    font-size: 1rem;
    padding-left: 1rem;
  }

  input:focus {
    background: ${(props) => props.theme["subtitle"]};
    padding-left: 1rem;
  }

  button {
    background: ${(props) => props.theme["border"]};
    border: none;
    margin-left: -0.3125rem;
    min-width: 2.5rem;
    cursor: pointer;
  }
`;

export const TitleContainerSearch = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 1.125rem;
    color: ${(props) => props.theme["subtitle"]};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["span"]};
  }
`;
