var str1=prompt("Enter first word");
var str2=prompt("Enter second word");

function isSameLength(str1,str2)
{
    //len1=str1.length;len2=str2.length;if(length==length)
    if( (str1.length)==(str2.length))
        return true;
    else
        return false;
}

var result=isSameLength(str1,str2);
console.log(result);