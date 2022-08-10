export default function Grid({ grid }) {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div>State: {grid.state}</div>
                <div>size: {grid.size}</div>
                <div>dificulty: {grid.dificulty}</div>

                {
                    grid.values && grid.values.map((valuesX, id) =>
                        <div key={"line" + id} style={{ display: "flex" }}>
                            {
                                valuesX.map((value, id) =>
                                    <div
                                        key={"column" + id}
                                        style={{ width: "25px", textAlign: "center" }}>
                                        {
                                            value ? value
                                                : <input key={"column" + id} style={{ width: "100%", padding: 0 }} />
                                        }
                                    </div>
                                )
                            }
                        </div>
                    )
                }
            </div>
        </>
    )
}