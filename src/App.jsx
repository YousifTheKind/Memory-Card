import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Board from "./components/Board";
import "./App.css";

function App() {
    return (
        <>
            <h1>Memory Card Game</h1>
            <p>Click on any cat image, but don't click the same image twice</p>

            <Board />
        </>
    );
}

export default App;
