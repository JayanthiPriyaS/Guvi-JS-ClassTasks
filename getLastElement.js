var len=parseInt(prompt("Enter length of array"));
arr=[];

for (i=0;i<len;i++)
{
    var arrele=prompt("Enter elements for array");
    arr.push(arrele);
}
var result=arr[len-1];
console.log(result);