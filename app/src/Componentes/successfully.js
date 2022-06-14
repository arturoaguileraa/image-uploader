import React from "react";
import "../Componentes/successfully.css";

export default function Successfully({ newfile, empty }) {
    const [file, setFile] = newfile;
    const urlfile = URL.createObjectURL(file);
    return (
        <dev className="Success">
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png"
                    className="check"
                    alt="checkfoto"
                ></img>
                <div className="us">Uploaded Successfully!</div>
            </div>
            <img src={urlfile} className="foto" alt="FotoSubida"></img>
            <div className="linkfoto">
                <div className="onlylink">{urlfile}</div>
                <button
                    onClick={() => {
                        navigator.clipboard.writeText("Hola que pasa");
                    }}
                >
                    Copy Link
                </button>
            </div>
        </dev>
    );
}
