export default function Dogas({ DogasList }) {
    return (
        DogasList.map(dogas => {
            return <h1 key={dogas}>
                {dogas}.DOGAS IS THE BEST!
            </h1 >
        })
    )
}