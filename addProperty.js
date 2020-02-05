var key=prompt("Enter key");
var value=prompt("Enter the corresponding value to it");

fruitsdict={1:"apple",2:"melon",3:"orange",4:"kiwi"};

function addProperty(key,value)
{
fruitsdict[key]=value;
return true;
}

var result=addProperty(key,value);
console.log(result);
console.log(fruitsdict);