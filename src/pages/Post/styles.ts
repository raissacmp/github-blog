import styled from "styled-components";

export const MainPostContent = styled.section`
  max-width: 864px;
  width: 100%;
  height: 168px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme["profile"]};
  position: relative;
  top: -84px;
  padding: 30px;
  border-radius: 10px;
  margin: 0 auto;

  header {
    h1 {
      margin: 20px 0px 8px 0px;
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
    border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme["blue"]};
    }
  }

  a {
    font-size: 12px;
    color: ${(props) => props.theme["blue"]};
    text-decoration: none;
    text-transform: uppercase;
  }

  img {
    padding: 5px;
  }
`;

export const PostDetails = styled.div`
  display: flex;

  span {
    display: flex;
    align-items: center;
    margin-right: 32px;
    color: ${(props) => props.theme["span"]};
  }
`;

export const PostBody = styled.article`
  p {
    color: ${(props) => props.theme["text"]};
    max-width: 800px;
    margin: 0 auto;
  }
`;
