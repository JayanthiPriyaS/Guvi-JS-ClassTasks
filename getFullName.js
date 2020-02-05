var fname=prompt("Enter first name");
var lname=prompt("Enter last name");


function getFullName(fname,lname)
{
     var fullname=fname+" "+lname;
     return fullname;
}

var result=getFullName(fname,lname);
console.log(result);