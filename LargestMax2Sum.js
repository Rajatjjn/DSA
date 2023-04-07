//largest 2 digit sum
let arr=[45,65,68,87,32,100]
let sum=0;
let firstsum=0;
let secondsum=0;
for(i=0;i<arr.length;i++){
    if(arr[i]>firstsum){
        secondsum=firstsum;
        firstsum=arr[i]
        
    }else if(arr[i]>secondsum){
        secondsum=arr[i]
    }
}
sum=firstsum+secondsum
console.log(firstsum,secondsum)
console.log(sum)
