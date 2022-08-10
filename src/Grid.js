export default function Grid({ grid }) {
    return (
        <>
            {
                grid.values && grid.values.map((valuesX) =>
                    valuesX.map((value, id) =>
                        value ? <p key={id}>{value}</p> : <input key={id} type="text" />
                    )
                )
            }
        </>
    )
}