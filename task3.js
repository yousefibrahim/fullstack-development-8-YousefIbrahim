var number, i;
console.log("Enter a positive integer:  ");
number=prompt();
console.log("Factors of number are: ");
for(i=1; i <= number; ++i)
{
    if (number%i == 0)
    {
        console.log(i);
    }
}


console.log("end of task 3 ///////////////////");
