import { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/Board.css";
export default function Board() {
    const [images, setImages] = useState([]);
    const [clickedImgIds, setClickedImgIds] = useState([]);
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const url =
        "https://api.giphy.com/v1/gifs/search?api_key=xYzMNjTJ1U7X3A87MGYaKRyoout57quD&q=cat&limit=10";

    async function fetchGif(url) {
        const response = await fetch(url);
        const obj = await response.json();
        return obj.data;
    }
    function handleData(data) {
        const newImages = [];
        data.forEach((gif) => {
            const imageObj = {
                url: gif.images.fixed_height.url,
                id: gif.id,
            };
            newImages.push(imageObj);
        });
        setImages([...newImages]);
    }
    useEffect(() => {
        fetchGif(url).then(handleData);
    }, []);
    const shuffleArray = (arr) => {
        const newArr = arr.slice();
        for (let i = newArr.length - 1; i > 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
        }

        setImages([...newArr]);
    };

    const handleScore = (imgId) => {
        if (clickedImgIds.includes(imgId)) {
            setClickedImgIds([]);
            setScore(0);
        } else {
            setClickedImgIds([...clickedImgIds, imgId]);
            setScore(score + 1);
            if (score + 1 > bestScore) {
                setBestScore(bestScore + 1);
            }
        }
    };

    return (
        <>
            <h4>
                Score: {score} Best Score: {bestScore}
            </h4>
            <div className="cards">
                {images.map((image) => {
                    return (
                        <Card
                            url={image.url}
                            key={image.id}
                            id={image.id}
                            images={images}
                            shuffleArray={shuffleArray}
                            handleScore={handleScore}
                        ></Card>
                    );
                })}
            </div>
        </>
    );
}
