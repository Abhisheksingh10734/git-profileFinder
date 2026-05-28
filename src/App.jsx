import { useEffect, useState } from "react";
import axios from "axios";

import { Top } from "./components/Top";
import { Middle } from "./components/Middle";
import { Bottom } from "./components/Bottom";

function App() {

  const [userName, setUserName] = useState("Abhisheksingh10734");
  const [userVal, setUserVal] = useState("");

  const [user, setUser] = useState(null);
  const [repo, setRepo] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchData = async () => {

      try {

        setLoading(true);
        setError("");

        const [userRes, repoRes] = await Promise.all([
          axios.get(`https://api.github.com/users/${userName}`),
          axios.get(`https://api.github.com/users/${userName}/repos`)
        ]);

        setUser(userRes.data);
        setRepo(repoRes.data);

      } catch (err) {

        setError("User Not Found");
        setUser(null);
        setRepo([]);

      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, [userName]);

  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex flex-col">

      <Top />

      <Middle
        user={user}
        repo={repo}
        loading={loading}
        error={error}

        userVal={userVal}
        setUserVal={setUserVal}

        setUserName={setUserName}
      />

      <Bottom />

    </div>
  );
}

export default App;