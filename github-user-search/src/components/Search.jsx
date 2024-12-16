import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData([]);

    try {
      const data = await fetchUserData(username, location, minRepos);
      setUserData(data);
      setTotalCount(data.total_count);
    } catch (err) {
      setError("Looks like we can't find any user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <h2 className="text-lg font-bold mb-4">Search GitHub Users</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="border rounded w-full py-2 px-3 mb-4"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location (optional)"
          className="border rounded w-full py-2 px-3 mb-4"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Minimum Repositories (optional)"
          className="border rounded w-full py-2 px-3 mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded py-2 px-4"
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div>
        {userData.map((user) => (
          <div key={user.id} className="border rounded p-4 mb-4">
            <h3 className="font-bold">{user.login}</h3>
            <img
              src={user.avatar_url}
              alt={`${user.login}'s avatar`}
              width="50"
            />
            <p>Location: {user.location || "N/A"}</p>
            <p>Repositories: {user.public_repos}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-blue-500 text-white rounded py-2 px-4 mr-2"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page * 30 >= totalCount} // Assuming 30 results per page
          className="bg-blue-500 text-white rounded py-2 px-4"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Search;
