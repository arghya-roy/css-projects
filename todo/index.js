const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.querySelector(".inputarea button")

button.addEventListener("click", addTask);
function addTask () {
    if (inputBox.value === '') {
        alert("Pleae write something")
    }
    else {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;

        let span = document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)

        listContainer.appendChild(li);
        inputBox.value='';
    }
}


// const list = document.querySelector("#list-container li");
// const remove = document.querySelector("#list-container li span");

// remove.addEventListener("click", removeTask);

// function removeTask() {
//     list.classList.add("checked");
// }


listContainer.addEventListener("click", function(e)
{
    if (e.target.tagName == "SPAN"){
        e.target.parentElement.classList.add("checked");
    }
},false
)