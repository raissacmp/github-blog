import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

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
  console.log("🚀 ~ file: index.tsx:6 ~ Profile ~ dataProfile:", dataProfile);

  async function getUserData() {
    const url = "/users/raissacmp";
    const response = await api.get(url);

    setDataProfile(response.data);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <main>
      {dataProfile && (
        <section>
          <div>
            <img src={dataProfile.avatar_url} alt="Avatar Github" />
          </div>
          <div>
            <h1>{dataProfile.name}</h1>
            <a href="https://github.com/raissacmp">GITHUB</a>
          </div>
          <p>{dataProfile.bio}</p>
          <div>
            <span>{dataProfile.login}</span>
            <span>{dataProfile.location}</span>
            <span>{dataProfile.followers}</span>
          </div>
        </section>
      )}
    </main>
  );
}
