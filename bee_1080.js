import {input} from "../io_utils.js"


function main(){

let i = 0
let M = Number(input(`O maior seŕa: `))
let P_Maior  = 1

while(i<=100){
    input(`Posição: ${i}`)
    i++
    if(P_Maior>M){
        M = i
    }
}
console.log(i)

}main()
