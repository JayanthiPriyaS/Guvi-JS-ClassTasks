var key=prompt("Enter key");

fruitsdict={1:"apple",2:"melon",3:"orange",4:"kiwi"};

function removeProperty(key)
{
 if(fruitsdict[key])
  { delete fruitsdict[key];
    return true;}
}

var result=removeProperty(key);
console.log(result);
console.log(fruitsdict);