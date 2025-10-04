//Print numbers from 1 to 10, but skip number 5.
let i=1;
do{
    if(i===5){
        i++;
        continue;
    }
    console.log(i);
    i++;
}while(i<=10);