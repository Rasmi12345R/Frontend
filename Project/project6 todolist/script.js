document.getElementById("push").addEventListener("click", function(){
    //validation input field//
    const inputfield=document.querySelector("#newtask input")
    if (inputfield.value.length===0){
        alert("please input task");
        return;
    }
    //add newtask//
    const taskContainer =document.querySelector("#tasks");
    taskContainer.innerHTML+=`
    <div class="task">
        <span id="taskname">${inputfield.value}</span>
        <button class="delete">
        <i class="fa-solid fa-trash"></i>
        </button>

    </div>`
    //delete task//
    const deleteButton = document.querySelectorAll(".delete")
    deleteButton.forEach((button)=>{
        button.onclick=function(){
            this.parentNode.remove();
        };
    })
    //complete tasks//
    const tasks=document.querySelectorAll(".task");
    tasks.forEach((task)=>{
        task.onclick=function(){
            this.classList.toggle("complete")
        }
        })
    });