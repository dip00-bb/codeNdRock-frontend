import React, { useEffect, useState } from "react";
import CodeEditor from "../Pages/CodeEditor";
import ProblemDescription from "./ProblemDescription";
import { useParams } from "react-router";
import { ProblemContext } from "../ProblemContext/ProblemContext";
import Loader from "./Loader";
import axiosPublic from "../axiosApis/useAxiosPublic";
import { useUser } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const ProblemDetails = () => {
    const languageMap = {
        javascript: 63,
        python: 71,
        cpp: 54
    };

    const user = useUser()
    console.log("user",user)

    // inside ProblemDetails
    const [output, setOutput] = useState("");
    const [loading, setLoading] = useState(false);


    const [code, setCode] = useState("// Write your code here");
    const [language, setLanguage] = useState("javascript");
    const [matchedProblem, setMatchedProblem] = useState("")
    const { slug } = useParams()




    useEffect(() => {

        const getPartiCularProblem = async () => {

            const response = await axiosPublic.get(`/all-problem/${slug}`)
            setMatchedProblem(response.data)
            setCode(response.data.function_template[language])
        }

        getPartiCularProblem()

    }, [slug, language])

    const handlePoint=(resultStatus)=>{

        const updatePoint=axiosPublic.patch('/update-point',{
            clerkId:user.user.id,
            resultStatus:resultStatus

        })

    }

    const handleSubmit = async () => {

        if(!user.isSignedIn){
            toast.warn("Please Login First")
            return
    
        }

        if (!matchedProblem) return;

        setLoading(true);
        setOutput("");

        try {
            const res = await axiosPublic.post("/submit-code", {
                source_code: code,
                language_id: languageMap[language],
                slug,
                expected_output: matchedProblem.example.output,
                standard_input: matchedProblem.example.input
            });

            // Display result from backend
            setOutput(res.data.resultDescription || res.data.status);

            handlePoint(res.data.resultDescription)

        } catch (err) {
            setOutput("Error submitting code", err);
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


            </div>
        </div>
    );
};

export default ProblemDetails;

