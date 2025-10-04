//Print numbers from 1 to 10 but stop the loop if the number is 6. 
let i=1;
while(i<=10){
    if(i===6){
        break;
    }
    console.log(i);
    i++;
}
    
   //Print numbers from 1 to 100, but stop at the first multiple of 5 greater than 20.
   for(let i=1;i<=100;i++){
    if(i>20 && i%5===0){
        break;
    }
    console.log(i);
   }