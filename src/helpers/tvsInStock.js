function tvsInStock(inventory) {
    let amountTVsInStock = 0;
    for (let i = 0; i < inventory.length; i++) {
        amountTVsInStock = inventory[i].originalStock + amountTVsInStock;
    }
    return amountTVsInStock;
}

export default tvsInStock;
