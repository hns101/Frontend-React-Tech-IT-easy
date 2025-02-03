function tvSizes (input){
    let TVString = ``;
    for (let i = 0; i < input.availableSizes.length; i++) {
        TVString = TVString + `${input.availableSizes[i]} inches (${Math.round((input.availableSizes[i]*2.54))} cm) | `;
    }
    return TVString.slice(0, TVString.length - 2)
}

export default tvSizes
