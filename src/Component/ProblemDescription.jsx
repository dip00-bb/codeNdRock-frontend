import React from 'react';
import Loader from './Loader';
import { ProblemContext } from '../ProblemContext/ProblemContext';


const ProblemDescription = ({ matchedProblem }) => {


    console.log(matchedProblem)

    return (
        <div className="p-4 space-y-6 w-full overflow-auto">

            {/* Title */}
            <h1 className="text-2xl font-bold mb-2">{matchedProblem?.title}</h1>

            {/* Difficulty & Topics */}
            <div className="flex items-center space-x-4 mb-4">
                <span
                    className={`px-2 py-1 rounded-full text-white text-xs ${matchedProblem?.difficulty_level === "Easy"
                        ? "bg-green-500"
                        : matchedProblem?.difficulty_level === "Medium"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                >
                    {matchedProblem?.difficulty_level}
                </span>
                <span className="text-gray-600 text-sm">
                    {/* Topics: {matchedProblem?.topics.join(", ")} */}
                </span>
            </div>

            {/* Description */}
            <div className="prose max-w-full">
                <h2 className="text-lg font-semibold">Description</h2>
                <p>{matchedProblem?.description}</p>
            </div>

            {/* Examples */}
            <div className="prose max-w-full">
                <h2 className="text-lg font-semibold">Examples</h2>



                <div className="mb-3 rounded">

                    <p className="p-2 rounded overflow-x-auto">
                        Input: {matchedProblem?.example?.input}
                    </p>
                    <p className="p-2 rounded overflow-x-auto">
                        Output:  {matchedProblem?.example?.output}

                        {console.log("hdfgsdfgkgla",matchedProblem?.example?.output)}
                    </p>

                </div>

                <div className="mb-3 rounded">
                    <p>Instruction</p>
                    <p className="p-2 rounded overflow-x-auto">
                        Input: {matchedProblem?.input}
                    </p>
                    <p className="p-2 rounded overflow-x-auto">
                        Output:  {matchedProblem?.output}
                    </p>

                </div>

            </div>

            {/* Constraints */}
            {matchedProblem?.constraints?.length > 0 && (
                <div className="prose max-w-full">
                    <h2 className="text-lg font-semibold">Constraints</h2>
                    <ul className="list-disc list-inside">
                        {matchedProblem.constraints.map((c, i) => (
                            <li key={i}>{c}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Hints */}
            {matchedProblem?.hints?.length > 0 && (
                <div className="prose max-w-full">
                    <h2 className="text-lg font-semibold">Hints</h2>
                    <ul className="list-disc list-inside">
                        {matchedProblem.hints.map((h, i) => (
                            <li key={i}>{h}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

    );
};

export default ProblemDescription;