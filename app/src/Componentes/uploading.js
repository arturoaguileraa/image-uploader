import React, { useEffect, useState } from "react";
import "../Componentes/uploading.css";
import api from "../api";

export default async function Uploading({ newfile, finish }) {
    const [finished, setFinished] = finish;

    setFinished(true);

    return (
        <div className="Uploading">
            <div className="Uyi">Uploading...</div>
            <div className="BarraGris">
                <div className="BarraAzul"></div>
            </div>
        </div>
    );
}
