//TODO
function getGridValues() { }

export default function Grid({ grid }) {
    { var size = grid.size }
    return (
        <>
            {size > 0 && <h1>{size}</h1>}
        </>
    )
}