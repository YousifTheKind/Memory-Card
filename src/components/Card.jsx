import { useEffect, useState } from "react";

export default function Card({ url }) {
    function something() {
        console.log("something");
    }
    return (
        <>
            <button onClick={something}>
                <img src={url} alt="" />
            </button>
        </>
    );
}
