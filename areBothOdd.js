var num1=parseInt(prompt("Enter number1 to check"));
var num2=parseInt(prompt("Enter number2 to check"));

function areBothOdd(num1,num2)
{
    if( (num1%2!=0) && (num2%2!=0))
      return true;
    else
        return false;
}

var result=areBothOdd(num1,num2);
console.log(result);