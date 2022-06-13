import React from "react";
import "../Componentes/uploading.css";

export default function Uploading({ newfile, finished }) {
    const urlfile = URL.createObjectURL(newfile);
    console.log(urlfile);

    return (
        <>
            <img src={urlfile}></img>
            <div className="Uploading">
                <div className="Uyi">Uploading...</div>
                <div className="BarraGris">
                    <div className="BarraAzul"></div>
                </div>
            </div>
        </>
    );
}
