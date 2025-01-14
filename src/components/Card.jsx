export default function Card({ url, images, shuffleArray, handleScore, id }) {
    return (
        <>
            <button
                onClick={(e) => {
                    shuffleArray(images);
                    handleScore(e.target);
                }}
            >
                <img src={url} alt="" id={id} />
            </button>
        </>
    );
}
