import axios from "axios";
const GITHUB_API_URL = "https://api.github.com/search/users?q";

export const fetchUserData = async (username, location, minRepos, page) => {
  const query = `${username}${location ? `+location:${location}` : ""}${
    minRepos ? `+repos:>=${minRepos}` : ""
  }`;
  const response = await axios.get(`${GITHUB_API_URL}?q=${query}&page=${page}`);
  return response.data; // Ensure you return the relevant data
};
