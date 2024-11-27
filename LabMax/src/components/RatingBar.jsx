const filled = '★';
const outlined = '✩';

function RatingBar({ rate, onRateChange }) {
    const handleClick = (index) => {
        if (onRateChange) {
            onRateChange(index + 1);
        }
    };

    return (
        <>
            {Array.from({ length: 10 }).map((_, i) => (
                <span
                    key={i}
                    style={{ cursor: "pointer", fontSize: "1.5rem", color: i < rate ? "gold" : "gray" }}
                    onClick={() => handleClick(i)}
                >
                    {i < rate ? filled : outlined}
                </span>
            ))}
        </>
    );
}

export default RatingBar;
