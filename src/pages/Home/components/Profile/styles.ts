import styled from "styled-components";

export const ProfileContainer = styled.main`
  display: flex;
  justify-content: center;
`;

export const ProfileContent = styled.section`
  max-width: 54rem;
  width: 100%;
  height: 13.25rem;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme["profile"]};
  position: relative;
  top: -6.625rem;
  padding: 2rem;
  border-radius: 0.625rem;

  h1 {
    color: ${(props) => props.theme["title"]};
    font-size: 1.5rem;
  }

  span {
    color: ${(props) => props.theme["subtitle"]};
  }
  p {
    color: ${(props) => props.theme["text"]};
    margin-bottom: 1.5rem;
  }

  a {
    font-size: 0.75rem;
    color: ${(props) => props.theme["blue"]};
    text-decoration: none;
  }
`;

export const DetailsProfile = styled.div`
  height: 100%;
  padding-left: 2rem;
  width: 100%;
`;

export const ImageProfile = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 0.5rem;
`;

export const LinkGitHubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;

  a {
    display: flex;
    img {
      margin-left: 0.5rem;
    }
    &:hover {
      border-bottom: 0.125rem solid ${(props) => props.theme["blue"]};
    }
  }
`;

export const PersonalInfos = styled.div`
  max-width: 25rem;
  display: flex;
  justify-content: space-between;

  span {
    display: flex;

    img {
      margin-right: 0.5rem;
    }
  }
`;
