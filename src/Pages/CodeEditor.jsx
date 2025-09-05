import React, { use} from "react";
import Editor from "@monaco-editor/react";
import { useParams } from "react-router";
import { ProblemContext } from "../ProblemContext/ProblemContext";
import ProblemDetails from "../Component/ProblemDetails";

const CodeEditor = ({ language = "javascript", value, onChange }) => {

    const {slug}=useParams()


    const {problems}=use(ProblemContext);


    const matchedProblem  =problems.find((p)=>p.problem_slug === slug)




    return (
        <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="flex-1">
                <ProblemDetails matchedProblem={matchedProblem} className="flex-1" />
            </div>
            <div className="flex-1">
                <Editor
                    height="100vh"
                    defaultLanguage={language}
                    language={language} // react-monaco will highlight based on this
                    theme="vs-dark" // dark theme, you can change to 'light' if you want
                    value={value}
                    onChange={onChange}
                    options={{
                        fontSize: 16,
                        minimap: { enabled: false },
                        automaticLayout: true, // responsive width
                        tabSize: 2,
                    }}
                />
            </div>
        </div>
    );
};

export default CodeEditor;
