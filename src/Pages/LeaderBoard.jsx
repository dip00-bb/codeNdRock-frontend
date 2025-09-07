import React, { useEffect, useState } from "react";
import axiosPublic from "../axiosApis/useAxiosPublic";


const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axiosPublic.get("/leaderboard");
        setUsers(res.data);
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="p-6 h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">🏆 Leaderboard</h1>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-yellow-400 text-gray-900">
            <tr>
              <th className="px-4 py-2 text-left">Rank</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Total Points</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 text-gray-200">
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="border-b border-gray-700 hover:bg-gray-700 transition"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.name || "Anonymous"}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2 font-bold">{user.totalPoint}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
