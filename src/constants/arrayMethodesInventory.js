import {inventory} from "./inventory.js";

// 1a all type names
const typeNameTV = inventory.map(inventory => inventory.type);
console.log(typeNameTV);

//1b log all sold out
const soldOutTvs = inventory.filter(tv => (tv.originalStock - tv.sold) <= 0);
console.log(soldOutTvs);

//1c find type tv
const findType = inventory.find(inventory => inventory.type === "NH3216SMART");
console.log(findType);

//1d
const sportTvSuitable = inventory.map(inventory => inventory);
sportTvSuitable.forEach(inventory => {inventory.suitable = inventory.refreshRate >= 100;});
console.log(sportTvSuitable);

//1e
const bigScreenTvs = inventory.filter(tv => tv.availableSizes.find(size => size >= 65) >= 65);
console.log(bigScreenTvs);

//1f
const haveAmbiLight = inventory.filter(tv => tv.options.find(tv => tv.name === "ambiLight" && tv. applicable === true));
console.log(haveAmbiLight);

//2a
const tvBrands = inventory.map(inventory => inventory.brand);
console.log(tvBrands);