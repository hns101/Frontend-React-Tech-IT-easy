function soldTvs(inventory) {
    let amountSoldTVs = 0;
    for (let i = 0; i < inventory.length; i++) {
        amountSoldTVs = inventory[i].sold + amountSoldTVs;
    }
    return amountSoldTVs;
}

export default soldTvs;

