const App = () => {
    const [value,setValue] = userState(10)
    
    const handleClick = () => {
        console.log("clicked the button")
        setValue(0)
    }

    return (
        <div>
            {value}
            <button onClick={handleClick}>button</button>
        </div>
    )
}

