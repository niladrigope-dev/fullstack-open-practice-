
const hello = () => {
  const handler = () => console.log('hello world')

  return handler()
}

const hello1 = () => console.log('hello world')

hello()
hello1()