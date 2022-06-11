import React from "react";
import "../Componentes/upload.css";

export default function Upload() {
    return (
        <div className="Upload">
            <div className="Uyi">Upload your image</div>
            <div className="File">File should be Jpeg, Png...</div>
            <div className="ZonaFile">
                <img
                    src="/image.svg"
                    alt="FotoMontañas"
                    className="Montaña"
                ></img>
                <div className="Drag">Drag & Drop your image here</div>
            </div>
            <div className="Or">Or</div>
            <button>Choose a file</button>
        </div>
    );
}
