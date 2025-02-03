import {inventory} from '../constants/inventory.js'

export function sortMostSoldTv() {
    const mostSoldTv = inventory.sort((a, b) => b.sold - a.sold);
    console.log(mostSoldTv);}

export function sortCheapestTv() {
    const cheapestTv = inventory.sort((a, b) => a.price - b.price);
    console.log(cheapestTv);}

export function sortForSportTv() {
    const sportTvSuitable = inventory.map(inventory => inventory);
    sportTvSuitable.forEach(inventory => {inventory.suitable = inventory.refreshRate >= 100;});
    sportTvSuitable.sort((a, b) => b.suitable - a.suitable);
    console.log(sportTvSuitable);}
