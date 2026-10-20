const App = () => {
    const [value,setValue] = useState(10)

    const Hello = (who) => {
        const Handler = () => {
            console.log("Hello", who)
        }
        return Handler
    }

    return (
        <div>
            <button onclick = {hello("world")}>button</button>
            <button onclick = {hello("react")}>button</button>
            <button onclick = {hello("function")}>button</button>
        </div>
    )
}