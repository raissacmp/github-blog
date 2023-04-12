import axios from "axios";
import { useEffect, useState } from "react";

export function Profile() {
  const [dataProfile, setDataProfile] = useState({});
  console.log("🚀 ~ file: index.tsx:6 ~ Profile ~ dataProfile:", dataProfile);

  async function getUserData() {
    const url = "https://api.github.com/users/raissacmp";
    const response = await axios.get(url);

    setDataProfile(response.data);
  }

  useEffect(() => {
    getUserData();
  }, []);
}
