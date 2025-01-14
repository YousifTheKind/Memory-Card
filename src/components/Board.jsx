import { useEffect, useState } from "react";
import Card from "./Card";
export default function Board() {
    const [images, setImages] = useState([]);
    // const [cards, setCards] = useState(() => {
    //     const tempArr = [];

    //     images.forEach((image) => {
    //         tempArr.push([<Card url={image.url} key={image.id}></Card>]);
    //     });
    //     return tempArr;
    // });
    const url =
        "https://api.giphy.com/v1/gifs/search?api_key=xYzMNjTJ1U7X3A87MGYaKRyoout57quD&q=cat&limit=10";

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
    }, [url]);
    // function startGame() {
    //     const tempArr = [];
    //     images.forEach((image) => {
    //         tempArr.push([
    //             <Card
    //                 url={image.url}
    //                 key={image.id}
    //                 cards={cards}
    //                 setCards={setCards}
    //             ></Card>,
    //         ]);
    //     });
    //     setCards([...tempArr]);
    //     document.querySelector("#start-btn").style.display = "none";
    // }
    console.log(images);

    return (
        <>
            {images.map((image) => {
                return (
                    <Card
                        url={image.url}
                        key={image.id}
                        images={images}
                        setImages={setImages}
                    ></Card>
                );
            })}
        </>
    );
}
