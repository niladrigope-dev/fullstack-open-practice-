const sum = (p1,p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(5,6)
console.log(result)

const square = (n) => {
    console.log(n)
    return n*n
}

const square1 = p => p * p

const sq1 = square(4)
const sq2 = square1(7)

console.log(sq1)
console.log(sq2)