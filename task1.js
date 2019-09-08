var object = {
  firstName: "John",
  age: 20,
  dateOfBirth: 1985  
};

function getstring(object){
  for (var key in object)
  {
    if (typeof object[key]=="string")
    {
      
      console.log(object[key]);
     document.write(object[key]);
    }
  

  }

}
getstring(object);

console.log("end of task 1   ////////////////////////");