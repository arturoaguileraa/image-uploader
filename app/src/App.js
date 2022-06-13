import React, { useState } from "react";
import "./App.css";
import Successfully from "./Componentes/successfully";
import Upload from "./Componentes/upload";
import Uploading from "./Componentes/uploading";

function App() {
    const [isEmpty, setIsEmpty] = useState(true);
    const [finished, setFinished] = useState(false);
    const [file, setFile] = useState(null);
    console.log(isEmpty);
    return (
        <div className="App">
            <header className="App-header">
                <div></div>
                {isEmpty ? (
                    <Upload
                        newfile={[file, setFile]}
                        empty={[isEmpty, setIsEmpty]}
                    />
                ) : finished ? (
                    <Successfully />
                ) : (
                    <Uploading
                        newfile={file}
                        finished={[finished, setFinished]}
                    />
                )}
                <div className="Created">
                    created by{" "}
                    <a
                        href="https://github.com/arturoaguileraa"
                        className="Created"
                    >
                        arturoaguileraa
                    </a>{" "}
                    - devChallenges.io
                </div>
            </header>
        </div>
    );
}

export default App;
