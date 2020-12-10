import React, { useState } from "react";

const APIURL = "http://localhost:8080";

const NatPersoonAPIcheck = () => {
    const [result, setResult] = useState("Test");
    const [bsn, setBsn] = useState("");
    const [natPersoon, setNatPersoon] = useState("Test de functie");

    const checkAPIisLive = (e) => {
        e.preventDefault();

        fetch(APIURL + `/natPersoon/`, {
            method: "GET",
        })
            .then((response) => response.text())
            .then((result) => setResult(JSON.stringify(result)))
            .catch((error) => console.log("error: " + error));
    };

    const FillNatPersoonWithBsn = (e) => {
        e.preventDefault();
        fetch(APIURL + `/natPersoon/check/${bsn}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => setNatPersoon(json))
            .catch((error) => console.log("error: " + error));
    };

    const handleInput = (e) => {
        e.preventDefault();
        setBsn(e.target.value);
    };

    return (
        <div>
            <br /> <button onClick={checkAPIisLive}>APICheck</button>
            <br />
            {result} <br /> <br />
            <label>Voer BSN in: </label>
            <input type="text" onChange={handleInput} value={bsn} />
            <button onClick={FillNatPersoonWithBsn}>
                Persoon in database?
            </button>
            <br />
            <pre>{JSON.stringify(natPersoon, null, "\t")}</pre>
        </div>
    );
};

export default NatPersoonAPIcheck;
