import React from "react";
import Editor from "@monaco-editor/react";


const CodeEditor = ({ language = "javascript", value, onChange }) => {

console.log( "vvvvvvvvvv", value)
    return (

        <div >
            <Editor
                height="70vh"
                defaultLanguage={language}
                language={language}
                theme="vs-dark"
                value={value}
                onChange={onChange}
                options={{
                    fontSize: 16,
                    minimap: { enabled: false },
                    automaticLayout: true,
                    tabSize: 2,
                }}
            />
        </div>

    );
};

export default CodeEditor;
