import React, { useState } from "react";
import "../Componentes/upload.css";

export default function Upload({ newfile, empty }) {
    const [isEmpty, setIsEmpty] = empty;
    const [file, setFile] = newfile;
    return (
        <div className="Upload">
            <div>
                <div className="Uyi">Upload your image</div>
                <div className="File">File should be Jpeg, Png...</div>
            </div>
            <div className="ZonaFile">
                <img
                    src="/image.svg"
                    alt="FotoMontañas"
                    className="Montaña"
                ></img>
                <div className="Drag">Drag & Drop your image here</div>
            </div>
            <div className="Or">Or</div>
            <label for="inputTag" type="file" className="file">
                Choose a file
            </label>
            <input
                id="inputTag"
                type="file"
                onChange={(e) => {
                    setFile(e.target.files[0]);
                    setIsEmpty(false);
                }}
            ></input>
        </div>
    );
}
