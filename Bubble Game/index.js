let time = 120
let score = 0
const hit = document.getElementsByClassName("number")[0]
function bubbleCreate()
{
    const area = document.querySelector("#bottom_part")
let bubble = ""
for (i =0;i<240;i++)
{
    bubble += `<div class="circle">${Math.floor(Math.random()*10)}</div>`
}
area.innerHTML = bubble
}

function timerSet()
{
    const timer = document.getElementsByClassName("number")[1]
    let runTimer = setInterval(function(){
        if(time > 0)
        {
            time--
            timer.innerHTML = time
        }
        else
        {
            clearInterval(runTimer)
            document.getElementById("bottom_part").innerHTML = ""
            hit.innerHTML = "-"
        }
    },1000)
}

function hitPlacer()
{
    hit.textContent = Math.floor(Math.random()*10)
}
function setScore()
{
    score += 10
    const res = document.getElementsByClassName("number")[2]
    res.innerHTML = score
}
function startGame()
{
    bubbleCreate()
    timerSet()
    hitPlacer()
}
document.querySelector("#bottom_part")
.addEventListener("click",function(e)
{
    if(e.target.innerHTML === hit.innerHTML)
    {
            setScore()
            bubbleCreate()
            hitPlacer()
    }
})
startGame()