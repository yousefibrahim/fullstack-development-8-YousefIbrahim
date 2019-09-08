/*console.log("please enter your string")
var myword=prompt();
var newword="";
console.log("this is your word ");
for(var i=0;i<myword.length;i++)
{
    if (myword.charAt(i)==myword.charAt(i).toUpperCase())
    {
        newword+=myword.charAt(i).toLowerCase();
        
       
        
    }
    else (myword.charAt(i) == myword.charAt(i).toLowerCase())
    {
        newword+=myword.charAt(i).toUpperCase();
        
    
    
    }
}
console.log("your new string will be "+ newword);
*/
console.log("please enter your string");
str=prompt();
function swapcase(str) {
    var new_str = "";
    var a = str.length;
    for (var i = 0; i < a; i++) {
    if (str[i] === str[i].toLowerCase()) {
    new_str += str[i].toUpperCase();
    } else {
    new_str += str[i].toLowerCase();
    }
    }
    return new_str;
    }
    
    console.log(swapcase(str));