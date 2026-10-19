const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handLeftClick = () => {
        setAll(allClicks.concat("L"))
        setLeft(left + 1)
    }

    const handRightClick = () => {
        setAll(allClicks.concat("R"))
        setRight(right + 1)
    }   

    return (
        <div>
            {left}
            <button onclick = {handLeftClick}>left</button>
            <button onclick = {handRightClick}>right</button>
            {right}
            <p>{allClicks.join(" ")}</p>
        </div>
    )
}