import { useEffect, useState } from "react";
import Card from "./Card";
export default function Board() {
    const [images, setImages] = useState([]);
    const cards = [];
    const url =
        "https://api.giphy.com/v1/gifs/search?api_key=5uqzcl3bsOYTjDU8BbWbxL4aSsZM72ek&q=cat&limit=10";

    async function fetchGif(url) {
        console.log("Fetching...");

        const response = await fetch(url);
        const obj = await response.json();
        return obj.data;
    }
    function handleData(data) {
        console.log("Handling...");
        const newImages = [];
        data.forEach((gif) => {
            const imageObj = {
                url: gif.images.fixed_height_small_still.url,
                id: gif.id,
            };
            newImages.push(imageObj);
        });
        setImages([...newImages]);
    }
    useEffect(() => {
        console.log("Effecting...");
        fetchGif(url).then(handleData);
    }, []);

    images.forEach((image) => {
        cards.push([<Card url={image.url} key={image.id}></Card>]);
    });

    return (
        <>
            <h1>Memory Card Game</h1>
            <p>Click on any cat image, but don't click the same image twice</p>
            {cards}
        </>
    );
}
