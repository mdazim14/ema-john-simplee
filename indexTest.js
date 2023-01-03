const productSum = (numOne) => {
    console.log("ami one")
    return (x) => {
        console.log("ami two");
        // return "ami vitorer func" + x
        return (y) => {
            console.log("ami three")
            return 45
        }
    }

// const result = 5+6;
// return result
}

// console.log(productSum())
console.log("ami 45 = ",productSum()()())