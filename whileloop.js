//1.Print numbers from 1 to 20.
let i=1;
while(i<=20){
    console.log(i);
    i++;
}
    
   //2.Count the number of digits in a number.
   let num=123456;
   let count=0;
   while(num!=0){
    num=Math.floor(num/10);
    count++;
   }
   console.log(count);