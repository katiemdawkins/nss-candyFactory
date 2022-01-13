// Buy some milk chocolate
//Define a function buyChocolate(), needs no parameters
//returns an object with a type property whose value is "Milk chocolate"

const buyChocolate = () => {
    const buying = {
        type: "Milk chocolate"
    }

    return buying
}
let buyingObject = buyChocolate()
console.log(buyingObject)

// Add some mint flavoring- addFlavoring()
// accepts 1 parameter - object as input
//add new flavor property value-"mint"

const addFlavoring = (buyingObject) => {
    buyingObject.Flavor = "Mint"

    return buyingObject
}

let addingFlavor = addFlavoring(buyingObject)
console.log(addingFlavor)


// Combine the chocolate and mint
// makeBarkMixture (1 param)
    //else block. verify right flavor - if ===mint >>>add new mixed property value true
    // if not =mint property = false

const makeBarkMixture = (buyingObject) => {
    if (buyingObject.Flavor === "Mint") {
        buyingObject.Mixed = true
    } else {
        buyingObject.Mixed = false
    }
    
    return buyingObject
}
let mixing = makeBarkMixture(buyingObject)
console.log(mixing)


// Bake the mixture
//define function bakeCandy(1 param)
    //check is mixed property === true >>> bake property =true 
    //else baked=false
const bakeCandy= (buyingObject) => {
    if (buyingObject.Mixed === true){
        buyingObject.Baked = true
    } else {
        buyingObject.Baked = false
    }
    
    return buyingObject
}

let baking = bakeCandy(buyingObject)
console.log(baking)

// Break the hardened sheet into 6 pieces
//defind breakBark(1param)
    // if baked === true return array with 6 strings "Mint Chocolate Bark Piece"
const breakBark = (buyingObject) => {
    if (buyingObject.Baked === true){
        return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
    }
    return buyingObject
}

let finished = breakBark(buyingObject)
console.log(finished)

// 🍫 🍫 🍫 🍫 🍫 🍫 Enjoy!

