const btn = document.getElementById("add")
const value = document.getElementById("value")
const list = document.querySelector("#list")

btn.onclick = function ()
{
    if(value.value == "")
    {
        alert("Cannot Add Empty Value")
    }
    else
    {
        let li = document.createElement("li")
        li.innerHTML = value.value;
        list.appendChild(li);
        let span = document.createElement("span")
        let img = document.createElement("img")
        img.src = "img/delete.jpg"
        span.appendChild(img)
        li.appendChild(span)

span.appendChild(img)
    }
    value.value = "";
}

list.addEventListener("click",function(e)
{
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "IMG"){
       let a =  e.target.parentElement
        a.parentElement.remove();
    }

},false);


