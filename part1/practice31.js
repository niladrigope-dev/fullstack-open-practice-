const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]

const result = notes.map(note => note.id)
const result1 = notes.map((note) =>
{
  return(
    <li>
      {note.content}
    </li>
    )
  }
)
console.log(result)
console.log(result1)