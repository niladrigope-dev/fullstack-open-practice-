const App = () => {
    const [clicks, setClicks] = useState({
        left:0, right:0
    })
    const handleLeftClick = () =>{
        setClicks({ ...clicks, left: clicks.left + 1 })
    }
   
    const handleRightClick = () => {
        const newClicks = {
            left: clicks.left,
            right: clicks.right + 1
        }
        setClicks(newClicks)
    }

    return (
        <div>
            {clicks.left}
            <button onclick = {handleLeftClick}>left</button>
            <button onclick = {handleRightClick}>left</button>
            {clicks.right}
        </div>
    )
}