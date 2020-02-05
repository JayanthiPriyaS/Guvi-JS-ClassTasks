var arrlen=prompt("Enter length of array");
arr=[];

for(i=0;i<arrlen;i++)
{
    var arrele=parseInt(prompt("Enter value"))
    arr.push(arrele);
}
var nthele=prompt("Enter which element");
var result=arr[nthele-1];
console.log(result);