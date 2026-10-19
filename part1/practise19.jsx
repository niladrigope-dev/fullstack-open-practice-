const App = () => {
  // these are ok
  const [age, setAge] = useState(0)
  const [name, setName] = useState('Juha Tauriainen')

  if ( age > 10 ) {
    // this does not work!
    const [foobar, setFoobar] = useState(null)
  }

  for ( let i = 0; i < age; i++ ) {
    // also this is not good
    const [rightWay, setRightWay] = useState(false)
  }

  const notGood = () => {
    // and this is also illegal
    const [x, setX] = useState(-1000)
  }

  return (
    //...
  )
}


//Do 1

const names = ['Alice', 'Bob', 'Charlie']

return (
  <ul>
    {names.map(name => (
      <li key={name}>{name}</li>
    ))}
  </ul>
)

// Do 2 

const Counter = () => {
  const [x, setX] = useState(-1000)

  return (
    <button onClick={() => setX(x + 1)}>
      {x}
    </button>
  )
}

//Dont's

const App = () => {
  const notGood = () => {
    const [x, setX] = useState(-1000)
  }

  return <button onClick={notGood}>Click me</button>
}

//notGood is an ordinary JavaScript Function

for (let i = 0; i < age; i++) {
  const [rightWay, setRightWay] = useState(false)
}