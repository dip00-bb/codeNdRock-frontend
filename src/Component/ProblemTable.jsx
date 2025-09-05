import { use } from "react";
import { Link } from "react-router";
import { ProblemContext } from "../ProblemContext/ProblemContext";
import Loader from "./Loader";


const ProblemTable = () => {
  const {problems,isLoading} = use(ProblemContext);


  if(isLoading) {
    return <Loader/>
  }

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl font-bold mb-4">All Problems</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-yellow-400 text-gray-900">
            <tr>
              <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base">#</th>
              <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base">Title</th>
              <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base">Difficulty</th>
              <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base">Topics</th>
              <th className="px-2 sm:px-4 py-2 text-left text-sm sm:text-base">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {problems?.map((p, index) => (
              <tr
                key={p?.problem_slug}
                className="hover:bg-gray-700 sm:hover:bg-gray-700 transition-colors"
              >
                <td className="px-2 sm:px-4 py-2 text-sm sm:text-base">{index + 1}</td>
                <td className="px-2 sm:px-4 py-2 text-sm sm:text-base">{p?.title}</td>
                <td className="px-2 sm:px-4 py-2 text-sm sm:text-base">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-xs sm:text-sm ${
                      p?.difficulty === "Easy"
                        ? "bg-green-500"
                        : p?.difficulty === "Medium"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                  >
                    {p?.difficulty}
                  </span>
                </td>
                <td className="px-2 sm:px-4 py-2 text-sm sm:text-base">
                  {p?.topics.join(", ")}
                </td>
                <td className="px-2 sm:px-4 py-2 text-sm sm:text-base">
                  <Link
                    to={`/problems/${p?.problem_slug}`}
                    className="text-blue-600 hover:underline"
                  >
                    Solve
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProblemTable;
