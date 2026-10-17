import { useState } from "react";

const Display = (props) => {
    return <div>{props.counter}</div>
}

const Button = (props) => {
    return (
        <button onclick = {props.onclick}>{props.text}</button>
    )
}

const App = () => {
    const [counter, setCounter] = useState(0)

    const increaseByOne = () => setCounter(counter + 1)
    const decreaseByOne = () => setCounter(counter - 1)
    const setToZero = () => setCounter(0)

    return (
        <div>
            <Display counter = {counter}/>

            <Button onclick = {increaseByOne} text = "plus"/>
            <Button onclick = {decreaseByOne} text = "minus"/>
            <Button onclick = {setToZero} text = "zero"/>
        </div>
    )
}

export default App

