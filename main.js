const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
]

const isOdd = number => number %2 !== 0
const kata8 = sampleArray.reverse().filter(isOdd).forEach(item => console.log(item))
 
sampleArray.reverse()

const logItem = function (item) {
    console.log("item:", item)
}


const kata11a = sampleArray.forEach(logItem)
const katta11b = sampleArray.forEach(item => console.log("item:", item))

const kata12a = sampleArray.filter(number => number % 2 === 0)

console.log(kata12a)

const kata14 = sampleArray.map(number => number * number)

console.log(kata14)

const users = [
    {name: 'Tony', favoriteIceCream: 'Vanilla', aga: 65, isActive: true},
    {name: 'Jake Weaver', favoriteIceCream: 'Shaved Ice', age: 23, Isactive: false},
    {name: 'Ben Lynch', favoriteIceCream: 'Mint Chop', age: 40, isActive: true},
    {name: 'DMG', favoriteIceCream: 'Red Velvet', age: 36, isActive: false},
    {name: 'Cindy Smith', favoriteIceCream: 'Choc w/ PB', age: 30, isActive: true},
]

const activeUsersUnder31FavIceCream = users
    .filter(user => user.isActive)
    .filter(user => user.age < 50)
    .map(user => user.favoriteIceCream)


console.log(activeUsersUnder31FavIceCream)

const firstIceCreamStartingM = users
    .map(user => user.favoriteIceCream)
    .find(iceCream => iceCream.startWith('M'))

    console.log(firstIceCreamStartingM)

    
    // KATA 8
    // Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, …, 3, 1)
    const isOdd = number => number % 2 !== 0
    const kata8 = sampleArray
        .reverse()
        .filter(isOdd)
        .forEach(item => console.log(item))
    
    sampleArray.reverse()
    
    for (let index = sampleArray.length - 1; index >= 0; index -= 1) {
        const item = sampleArray[index]
    
        if (isOdd(item)) {
            console.log(item)
        }
    }
    
    
    // KATA 11
    const logItem = function (item) {
        console.log("item:", item)
    }
    
    const kata11a = sampleArray.forEach(logItem)
    const kata11b = sampleArray.forEach(item => console.log("item:", item))
    
    // Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
    
    const isEven = number => number % 2 === 0
    const kata12a = sampleArray.filter(isEven)
    
    console.log(kata12a)
    
    // Kata 14: Display the square of each element in sampleArray. (219961, 570025, …, 222784)
    
    const toSquares = number => number * number
    const kata14 = sampleArray.map(toSquares)
    
    console.log(kata14)
    
    const users = [
        { name: 'Tony', favoriteIceCream: 'Vanilla', age: 65, isActive: true },
        { name: 'Jack Weaver', favoriteIceCream: 'Shaved Ice', age: 23, isActive: false },
        { name: 'Ben Lynch', favoriteIceCream: 'Mint Chip', age: 40, isActive: true },
        { name: 'DMG', favoriteIceCream: 'Red Velvet', age: 36, isActive: false },
        { name: 'Cindy Smith', favoriteIceCream: 'Choc w/ PB', age: 30, isActive: true },
    ]
    
    const favoriteIceCreamsOfActiveUsersUnder50 = users
        .filter(user => user.isActive)
        .filter(user => user.age < 50)
        .map(user => user.favoriteIceCream)
    
    console.log(favoriteIceCreamsOfActiveUsersUnder50)
    
    const firstIceCreamStartingM = users
        .map(user => user.favoriteIceCream) // ['Vanilla', 'Mint Chip', etc.]: an ARRAY, so we can use an array method next
        .find(iceCream => iceCream.startsWith('M')) // 'Mint Chip': a STRING, so we can use a string method next
        .toUpperCase() // 'MINT': a STRING, so we can use a string method next
        .split('') // '["M", "I", "N", "T", " ", "C", "H", "I", "P"]': a ARRAY, so we can use an array method next
        .filter(char => char !== ' ') // '["M", "I", "N", "T", "C", "H", "I", "P"]': a ARRAY, so we can use an array method next
        .join('') // 'MINTCHIP': a STRING, so we could use a string method next
    
    console.log(firstIceCreamStartingM) 