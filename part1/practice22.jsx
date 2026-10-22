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
            <button onclick = {Hello("world")}>button</button>
            <button onclick = {Hello("react")}>button</button>
            <button onclick = {Hello("function")}>button</button>
        </div>
    )
}