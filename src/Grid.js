export default function Grid({ grid }) {
    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <div style={{
                    margin: 15,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <div><b>State:</b> {grid.state}</div>
                    <div><b>Size:</b> {grid.size} x {grid.size}</div>
                    <div><b>Dificulty:</b> {grid.dificulty}</div>
                </div>

                <div style={{
                    border: "4px solid black"
                }}>
                    {
                        grid.values && grid.values.map((valuesX, id) =>
                            <div key={"line" + id} style={{ display: "flex" }}>
                                {
                                    valuesX.map((value, id) =>
                                        <div
                                            key={"column" + id}
                                            style={{
                                                width: 25,
                                                height: 25,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                border: "1px solid black"
                                            }}>
                                            {
                                                value ? value
                                                    : <input
                                                        key={"column" + id}
                                                        maxLength={grid.size.toString().length}
                                                        style={{
                                                            border: 0,
                                                            padding: 0,
                                                            width: "100%",
                                                            height: "100%",
                                                            textAlign: "center"
                                                        }} />
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}