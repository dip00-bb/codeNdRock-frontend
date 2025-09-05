import { useEffect, useState } from "react";
import axiosPublic from "../axiosApis/useAxiosPublic";



const ProblemProvider = ({ children }) => {

    const [problems,setProblems]=useState([])


    useEffect(() => {
        const getAllProblems=()=>{
            try {
                const data= axiosPublic.get('/problems')
                console.log(data)
                setProblems(data)
            } catch (error) {
                console.log(error)
            }
        }
        getAllProblems()
    }, []);



    return <AuthContext value={problems}>{children}</AuthContext>
};

export default ProblemProvider;