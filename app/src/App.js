import "./App.css";
import Upload from "./Componentes/upload";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div></div>
                <Upload />
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
