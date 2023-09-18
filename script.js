let input_btn=document.getElementById("input-button");
let add_btn=document.getElementById("add-btn");
let taskList=document.getElementById("task-list");
let search="";
// Event to add functionality to input tag
add_btn.addEventListener("click",(e)=>{
    if(input_btn.value==='')
    {
        alert("You have to type something");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=input_btn.value;
        taskList.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input_btn.value="";
    saveData();
})
taskList.addEventListener("click",(ev)=>{
    console.log(ev.target.tagName)
    if(ev.target.tagName=="LI")
    {
        ev.target.classList.toggle("checked");
    }
    else if(ev.target.tagName=="SPAN")
    {
        ev.target.parentElement.remove();
    }
    saveData();
})
showData();
function saveData(){
    localStorage.setItem("data",taskList.innerHTML)
}
function showData(){
    taskList.innerHTML=localStorage.getItem("data");
}