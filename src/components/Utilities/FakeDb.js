
// use local storage to manage cart data
const addToDb = id => {

    let shoppingCart;

    //get quantity cart
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }

    // add quantity 
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        console.log("shopping", shoppingCart.id);
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromCart = (id) => {
    // let shoppingCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            const { id } = shoppingCart;
            if (id.length > 1) {
                const newQuantity = id - 1;
                shoppingCart[id] = newQuantity;
            }
            else
                delete shoppingCart[id];
        }
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

    }

    // localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}


export {
    addToDb,
    removeFromCart
}





























// // use local storage to manage cart data
// const addToDb = id => {

//     let shoppingCart;

//     //get the shopping cart
//     const storedCart = localStorage.getItem('shopping-cart');
//     if (storedCart) {
//         shoppingCart = JSON.parse(storedCart);
//         console.log("first", shoppingCart);
//     }
//     else {
//         shoppingCart = {};
//         console.log("shping cart empty", shoppingCart);
//     }

//     const quantity = shoppingCart[id];
//     console.log("seconded", quantity);

//     if (quantity){
//         const newQuantity = +quantity + 1;
//         shoppingCart[id] = newQuantity;
//         console.log("third", shoppingCart);
//     }
//     else {
//         shoppingCart[id] = 1;
//         console.log(shoppingCart);
//     }
//     localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));

// }

// export { addToDb }