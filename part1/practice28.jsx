// one type 

const App = (props) => {
    const {notes} = props

    return (
        <>
            <h1>Notes</h1>
            <ul>
                <li>{notes[0].content}</li>
                <li>{notes[1].content}</li>
                <li>{notes[2].content}</li>
            </ul>
        </>
    )
}

// you can also write

const App1 = ({notes}) => {
   
    return (
        <>
            <h1>Notes</h1>
            <ul>
                <li>{notes[0].content}</li>
                <li>{notes[1].content}</li>
                <li>{notes[2].content}</li>
            </ul>
        </>
    )
}