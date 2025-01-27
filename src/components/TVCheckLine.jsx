import check from "../assets/check.png";
import uncheck from "../assets/minus.png";

function TVCheckLine(input){
    let TotalString = ``;
    for (let i = 0; i < input.options.length; i++) {
        if (input.options[i].applicable === true) {
            TotalString = TotalString + `${<img src="../assets/check.png"  alt={"check"}/>} ${input.options[i].name} `;
        }
        else {
            TotalString = TotalString + `${<img src="../assets/minus.png"  alt={"Uncheck"}/>} ${input.options[i].name} `;
        }
    }
    return(<>
        <div>{TotalString}</div>
</>)   }
export default TVCheckLine


