import React from "react";
import "../Componentes/successfully.css";

export default function Successfully() {
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
            <img
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFib3J8ZW58MHx8MHx8&w=1000&q=80"
                className="foto"
                alt="FotoSubida"
            ></img>
            <div className="linkfoto">
                <div className="onlylink">
                    https://github.com/arturoaguileraa/image-uploader/uuuuuu
                </div>
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
