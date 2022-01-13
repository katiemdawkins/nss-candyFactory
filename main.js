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
    
}
let mixing = makeBarkMixture(buyingObject)
console.log(mixing)


// Bake the mixture
// Break the hardened sheet into 6 pieces
// 🍫 🍫 🍫 🍫 🍫 🍫 Enjoy!

