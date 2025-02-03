function tvsToSell(inventory) {
    let amountTVsInStock = 0;
    let amountSoldTVs = 0;
    for (let i = 0; i < inventory.length; i++) {
        amountTVsInStock = inventory[i].originalStock + amountTVsInStock;
        amountSoldTVs = inventory[i].sold + amountSoldTVs;
    }
    return amountTVsInStock - amountSoldTVs;
}

export default tvsToSell;
