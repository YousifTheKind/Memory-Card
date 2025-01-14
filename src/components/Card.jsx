import { useEffect, useState } from "react";

export default function Card({ url, images, setImages }) {
    const shuffleArray = (arr) => {
        const newArr = arr.slice();
        for (let i = newArr.length - 1; i > 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
        }
        console.log(arr);

        setImages([...newArr]);
    };

    return (
        <>
            <button onClick={() => shuffleArray(images)}>
                <img src={url} alt="" />
            </button>
        </>
    );
}
