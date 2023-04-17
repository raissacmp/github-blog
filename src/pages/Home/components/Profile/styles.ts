import styled from "styled-components";

export const ProfileContainer = styled.main`
  display: flex;
  justify-content: center;
`;

export const ProfileContent = styled.section`
  max-width: 864px;
  width: 100%;
  height: 212px;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme["profile"]};
  position: relative;
  top: -106px;
  padding: 32px;
  border-radius: 10px;

  h1 {
    color: ${(props) => props.theme["title"]};
    font-size: 24px;
  }

  span {
    color: ${(props) => props.theme["subtitle"]};
  }
  p {
    color: ${(props) => props.theme["text"]};
    margin-bottom: 24px;
  }

  a {
    font-size: 12px;
    color: ${(props) => props.theme["blue"]};
    text-decoration: none;
  }
`;

export const DetailsProfile = styled.div`
  height: 100%;
  padding-left: 32px;
  width: 100%;
`;

export const ImageProfile = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`;

export const LinkGitHubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  a {
    display: flex;
    img {
      margin-left: 8px;
    }
    &:hover {
      border-bottom: 2px solid ${(props) => props.theme["blue"]};
    }
  }
`;

export const PersonalInfos = styled.div`
  max-width: 400px;
  display: flex;
  justify-content: space-between;

  span {
    display: flex;

    img {
      margin-right: 8px;
    }
  }
`;
