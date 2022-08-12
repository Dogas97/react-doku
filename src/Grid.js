export default function Grid({ grid }) {
    return (
        <>
            {
                grid ?
                    <div style={{
                        margin: "15px 0",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <div><b>State:</b> {grid.state === 0 ? "Ready" : grid.state === 1  ? "Started" : "Finished"}</div>
                            <div><b>Size:</b> {grid.size} x {grid.size}</div>
                            <div><b>Difficulty:</b> {grid.difficulty === 1 ? "Easy" :grid.difficulty === 2 ? "Normal": "Hard"}</div>
                        </div>

                        {
                            grid.state === 1 ? 
                                <div style={{
                                    marginTop: 15,
                                    border: "4px solid black"
                                }}>
                                    {
                                        grid.values.map((valuesX, id) =>
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
                                                                value ?
                                                                    <div style={{fontWeight: "bold"}}>{value}</div>
                                                                : 
                                                                    <input
                                                                        key={"column" + id}
                                                                        maxLength={grid.size.toString().length}
                                                                        style={{
                                                                            border: 0,
                                                                            padding: 0,
                                                                            width: "100%",
                                                                            height: "100%",
                                                                            textAlign: "center"
                                                                        }} 
                                                                    />
                                                            }
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                            : 
                                <></>
                        }
                    </div>
                :
                    <></>
            }
        </>
    )
}