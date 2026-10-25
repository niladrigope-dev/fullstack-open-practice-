import Note from './components/Note'

const App = ({ notes }) => {

  console.log("App works...")
  console.log(notes)
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  )
}

export default App
