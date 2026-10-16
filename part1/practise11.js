class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name +'my age is ' +this.age)
  }
}

const adam = new Person('Adam Ondra', 33)
setTimeout(adam.greet.bind(adam),1000)

const janja = new Person('Janja Garnbret', 27)
janja.greet()