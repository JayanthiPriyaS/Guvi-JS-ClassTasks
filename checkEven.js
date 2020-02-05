var num=parseInt(prompt("Enter number to check"))

function isEven(num)
{
    if(num%2==0)
        return true;
    else
      return false;
}
var result=isEven(num);
console.log(result);