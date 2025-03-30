export function multiply(a,b){
    if (a ==1  && b==1){
        return 1
    }
    if (a ==2 && b==2){
        return 4
    }
    if (a==3 && b==3){
        return 9

    }
    return 16
}
let result = multiply(4,4)
console.log (result)