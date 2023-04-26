import styled from "styled-components";

export const MainPostContent = styled.section`
  max-width: 54rem;
  width: 100%;
  height: 10.5rem;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme["profile"]};
  position: relative;
  top: -5.25rem;
  padding: 1.875rem;
  border-radius: 0.625rem;
  margin: 0 auto;

  header {
    h1 {
      margin: 1.25rem 0rem 0.5rem 0rem;
      color: ${(props) => props.theme["title"]};
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 0.125rem solid transparent;

    &:hover {
      border-bottom: 0.125rem solid ${(props) => props.theme["blue"]};
    }
  }

  a {
    font-size: 0.75rem;
    color: ${(props) => props.theme["blue"]};
    text-decoration: none;
    text-transform: uppercase;
  }

  img {
    padding: 0.3125rem;
  }
`;

export const PostDetails = styled.div`
  display: flex;

  span {
    display: flex;
    align-items: center;
    margin-right: 2rem;
    color: ${(props) => props.theme["span"]};
  }
`;

export const PostBody = styled.article`
  p {
    color: ${(props) => props.theme["text"]};
    max-width: 50rem;
    margin: 0 auto;
  }
`;
