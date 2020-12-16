

//function for displaying values
function dis(val)
{
document.getElementById("demo").value+=val
}

//function for evaluation
function solve()
{
let x = document.getElementById("demo").value
let y = eval(x)
document.getElementById("demo").value = y
}

//function for clearing the display
function clr()
{
document.getElementById("demo").value = ""
}

//function for backspace
function back() {
    var value = document.getElementById("demo").value;
    document.getElementById("demo").value = value.substr(0, value.length - 1);
}