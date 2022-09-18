// use local storage to manage cart data
const addToDb = id => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        const newQuantity = +quantity + 1;
        localStorage.setItem(id, newQuantity);
    }
    else {
        // console.log("new item");
        localStorage.setItem(id, 1);
        // console.log(id);
    }

}

export { addToDb }