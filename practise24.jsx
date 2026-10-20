import {useState} from "react"

const Button = (props) => (
    <button onclick = {props.onclick}> text = {props.text} </button>
)

const App = () => {
    const [value, setValue] = useState(10)

    const setToValue = (newValue) => {
        console.log("value now", newValue)
        setValue(newValue)
    }

    return(
        <div>
        {value}
        <Button onclick = {() => setToValue(1000)} text = "thousand"/>
        <Button onclick = {() => setToValue(0)} text = "reset"/>
        <Button onclick = {() => setToValue(value+1)} text = "increment"/>
        </div>
    )
 }