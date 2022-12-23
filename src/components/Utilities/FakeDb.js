// use local storage to manage cart data
const addToDb = id => {

    let shoppingCart;

    //get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
        console.log("first", shoppingCart);
    }     
    else {
        shoppingCart = {};
        console.log("shping cart empty", shoppingCart);
    }

    const quantity = shoppingCart[id];
    console.log("seconded", quantity);

    if (quantity){
        const newQuantity = +quantity + 1;
        shoppingCart[id] = newQuantity;
        console.log("third", shoppingCart);
    }
    else {
        shoppingCart[id] = 1;
        console.log(shoppingCart);
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));

}

export { addToDb }