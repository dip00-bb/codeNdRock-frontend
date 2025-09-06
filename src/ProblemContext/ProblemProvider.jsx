import { useEffect, useState } from "react";
import axiosPublic from "../axiosApis/useAxiosPublic";
import { ProblemContext } from "./ProblemContext";

const ProblemProvider = ({ children }) => {

    const [problems,setProblems]=useState([])
    const [isLoading, setLoading] = useState(true);
    const [error,setError]=useState(false)

    useEffect(() => {
        const getAllProblems= async ()=>{
            setLoading(true)
            try {
                const response= await axiosPublic.get('/all-problems')
                console.log("res res",response)
                setProblems(response?.data)
                setLoading(false)
                setError(false)
            } catch (error) {
                setError(error)
            }
        }
        getAllProblems()
    }, []);

    console.log("prob prob",problems)
    const problemsData={
        problems,
        isLoading,
        error
    }


    return <ProblemContext value={problemsData}>{children}</ProblemContext>
};

export default ProblemProvider;