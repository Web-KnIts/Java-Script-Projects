const note = document.querySelector("#AddMore")
const addNote=()=>{
    note.innerHTML += `
    <div class="card">
    <p class="data" contenteditable="true"></p>
    <div class="btn-container">
        <button class="save" value="save">save</button>
        <button class="delete" value="delete">delete</button>
    </div>
</div>`
}

note.addEventListener("click",function(e)
{
    var a = e.target.parentElement
    a = a.parentElement
   if (e.target.value === "delete")
   {
    a.remove()
   }
   else if(e.target.value === "save")
    {
     a = a.childNodes[1]
     a.setAttribute("contenteditable","false")
   }
   
},false)