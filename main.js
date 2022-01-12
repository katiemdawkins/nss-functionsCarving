// I created a variable that holds a function that holds and object.

const createWoodBlock = () => {
    // Return an object with 4 properties.
    const woodObject = {
        type: "wood block",
        length: 10,
        material: "pine",
        purpose: "flute"
    }
    return woodObject
}

//I want to take the object in the above function, and return a string in human lanugage
//so that we can understand what the object is. 
//So, I created a variable with a paramenter(arugment) of the object in the createWoodBlock Function.
//The createBeautifulCarving function creates a variable that makes a string (string interpolation).
//This function returns the string.

const createBeautifulCarving = (woodObject) => {
    // Return a string representation of the object
    const stringRepresentation = `The ${woodObject.length} inch, ${woodObject.material} woodblock was carved into a wooden ${woodObject.purpose}.`
    return stringRepresentation
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it.

console.log(carvingString)