import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

import externalLink from "../../../../../src/assets/externalLink.svg";
import followersIcon from "../../../../../src/assets/followersIcon.svg";
import githubIcon from "../../../../../src/assets/githubIcon.svg";
import localeIcon from "../../../../../src/assets/localeIcon.svg";

import {
  DetailsProfile,
  ImageProfile,
  LinkGitHubContainer,
  PersonalInfos,
  ProfileContainer,
  ProfileContent,
} from "./styles";

interface Profile {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  location: string;
  followers: string;
}

export function Profile() {
  const [dataProfile, setDataProfile] = useState<Profile>();

  async function getUserData() {
    const url = "/users/raissacmp";
    const response = await api.get(url);

    setDataProfile(response.data);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <ProfileContainer>
      {dataProfile && (
        <ProfileContent>
          <div>
            <ImageProfile src={dataProfile.avatar_url} alt="Avatar Github" />
          </div>
          <DetailsProfile>
            <LinkGitHubContainer>
              <h1>{dataProfile.name}</h1>
              <a href="https://github.com/raissacmp" target="_blank">
                GITHUB
                <img src={externalLink} alt="" />
              </a>
            </LinkGitHubContainer>
            <div>
              <p>{dataProfile.bio}</p>
              <PersonalInfos>
                <span>
                  <img src={githubIcon} alt="" />
                  {dataProfile.login}
                </span>
                <span>
                  <img src={localeIcon} alt="" />
                  {dataProfile.location}
                </span>
                <span>
                  <img src={followersIcon} alt="" /> {dataProfile.followers}{" "}
                  followers
                </span>
              </PersonalInfos>
            </div>
          </DetailsProfile>
        </ProfileContent>
      )}
    </ProfileContainer>
  );
}
