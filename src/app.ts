
import x from "./message.js"

let sayHello = ()=>{

    console.log(`Hello ${x.name}!! How are you?`)

    
}

sayHello()

function productArray(){

    let arr = [10,20,30,40]

    let result = []

    for(let i=0;i<arr.length;i++){

        let product = 1;

        for(let j=0;j<arr.length;j++){

            if(i != j){
                product*=arr[j];
            }

        }

        result.push(product);
    }

    console.log(result)

}

productArray();