var key=prompt("Enter key to get value");
fruitsdict={1:"apple",2:"melon",3:"orange",4:"kiwi"};

function getProperty(key)
{
return fruitsdict.[key];
}

var result=getProperty(key);
console.log(result);