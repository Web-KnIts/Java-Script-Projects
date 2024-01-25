const len = document.getElementById("len")
const btnGenerate = document.getElementById("generate")
const value = document.getElementById("value")
const copy = document.getElementById("copy")

btnGenerate.onclick = function()
{

    if(len.value<8 || len.value>31)
    {
        alert("Invalid Lenght \n Range(8 to 30)")
        value.value="password"
    }
    else
    {
        var char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$"
        var res = ""
        for(i=0;i<len.value;i++)
        {
            res +=char.charAt(Math.floor(Math.random()*char.length))
        }
        value.value = res
        console.log(value.value)
    }
    len.value = ""
}

copy.onclick = function()
{
    value.select()
    value.setSelectionRange(0,9999)
    navigator.clipboard.writeText(value.value)
    value.value="password"
}