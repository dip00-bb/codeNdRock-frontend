


import React, { useEffect, useState } from "react";
import CodeEditor from "../Pages/CodeEditor";
import ProblemDescription from "./ProblemDescription";
import { useParams } from "react-router";
import { ProblemContext } from "../ProblemContext/ProblemContext";
import Loader from "./Loader";
import axiosPublic from "../axiosApis/useAxiosPublic";

const ProblemDetails = () => {
    const languageMap = {
        javascript: 63,
        python: 71,
        cpp: 54
    };

    // inside ProblemDetails
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);


    const [code, setCode] = useState("// Write your code here");
    const [language, setLanguage] = useState("javascript");
    const [matchedProblem, setMatchedProblem] = useState("")
    const { slug } = useParams()




    console.log(slug)


    useEffect(() => {

        const getPartiCularProblem = async () => {

            const response = await axiosPublic.get(`/all-problem/${slug}`)
            console.log("use effect")
            console.log(response.data)
            setMatchedProblem(response.data)
            setCode(response.data.code_snippets[language])
        }

        getPartiCularProblem()

    }, [slug, language])


    const handleSubmit = async () => {
        if (!matchedProblem) return;

        setLoading(true);
        setOutput("");

        try {
            const res = await axiosPublic.post("/submit-code", {
                source_code: code,
                language_id: languageMap[language],
                slug,
            });

            // Display result from backend
            const { status, actualOutput, expectedOutput } = res.data;
            setOutput(
                `Status: ${status}\nExpected: ${expectedOutput}\nYour Output: ${actualOutput}`
            );
        } catch (err) {
            console.error(err);
            setOutput("Error submitting code");
        }

        setLoading(false);
    };




    return (
        <div className="flex p-6">
            <div className="w-full md:w-1/2">
                <ProblemDescription matchedProblem={matchedProblem} />
            </div>

            <div className="w-full md:w-1/2">
                <div className="flex gap-4 items-center">
                    <h1 className="text-2xl font-bold mb-4">Two Sum</h1>

                    {/* Language Selector */}
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="mb-4 p-2 border rounded bg-gray-800"
                    >
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="cpp">C++</option>
                    </select>
                </div>

                <CodeEditor
                    language={language}
                    value={code}
                    onChange={(newCode) => setCode(newCode)}
                    className='w-full'
                />

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 disabled:opacity-50"
                >
                    {loading ? "Running..." : "Submit"}
                </button>



                <div className="mt-4 bg-gray-900 text-green-400 p-4 rounded min-h-[100px]">
                    <pre>{output}</pre>
                </div>

                {console.log("ouuuuuuuuu", output)}

            </div>
        </div>
    );
};

export default ProblemDetails;


// import React, { useEffect, useState, useContext } from "react";
// import CodeEditor from "../Pages/CodeEditor";
// import ProblemDescription from "./ProblemDescription";
// import { useParams } from "react-router";
// import { ProblemContext } from "../ProblemContext/ProblemContext";
// import Loader from "./Loader";
// import axiosPublic from "../axiosApis/useAxiosPublic";

// const ProblemDetails = () => {
//   const { problems } = useContext(ProblemContext);

//   const languageMap = {
//     javascript: 63,
//     python: 71,
//     cpp: 54,
//   };

//   const [code, setCode] = useState("// Write your code here");
//   const [language, setLanguage] = useState("javascript");
//   const [output, setOutput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [matchedProblem, setMatchedProblem] = useState(null);

//   const { slug } = useParams();

//   useEffect(() => {
//     if (problems.length === 0) return;

//     const problem = problems.find((p) => p.problem_slug === slug);
//     setMatchedProblem(problem);

//     // Set default code snippet for selected language
//     if (problem) setCode(problem.code_snippets[language]);
//   }, [problems, slug, language]);

//   const handleSubmit = async () => {
//     if (!matchedProblem) return;

//     setLoading(true);
//     setOutput("");

//     try {
//       const res = await axiosPublic.post("/submit-code", {
//         source_code: code,
//         language_id: languageMap[language],
//         slug,
//       });

//       // Display result from backend
//       const { status, actualOutput, expectedOutput } = res.data;
//       setOutput(
//         `Status: ${status}\nExpected: ${expectedOutput}\nYour Output: ${actualOutput}`
//       );
//     } catch (err) {
//       console.error(err);
//       setOutput("Error submitting code");
//     }

//     setLoading(false);
//   };

//   if (!matchedProblem) return <Loader />;

//   return (
//     <div className="flex flex-col md:flex-row p-6 gap-6">
//       {/* Problem Description */}
//       <div className="w-full md:w-1/2">
//         <ProblemDescription matchedProblem={matchedProblem} />
//       </div>

//       {/* Code Editor */}
//       <div className="w-full md:w-1/2 flex flex-col">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold">{matchedProblem.title}</h1>

//           <select
//             value={language}
//             onChange={(e) => setLanguage(e.target.value)}
//             className="p-2 border rounded bg-gray-800 text-white"
//           >
//             <option value="javascript">JavaScript</option>
//             <option value="python">Python</option>
//             <option value="cpp">C++</option>
//           </select>
//         </div>

//         <CodeEditor
//           language={language}
//           value={code}
//           onChange={setCode}
//           className="w-full flex-1 border rounded"
//         />

//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           className="mt-4 px-4 py-2 bg-yellow-400 text-gray-900 rounded hover:bg-yellow-500 disabled:opacity-50"
//         >
//           {loading ? "Running..." : "Submit"}
//         </button>

//         {/* Output Console */}
//         <div className="mt-4 bg-gray-900 text-green-400 p-4 rounded min-h-[120px] overflow-auto whitespace-pre-wrap">
//           <pre>{output}</pre>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProblemDetails;
