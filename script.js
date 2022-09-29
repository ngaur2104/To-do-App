window.addEventListener('load', () => {
    let form = document.querySelector("#taskForm");
    let input = document.querySelector("#taskInput");
    let list = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let task = input.value;
        
        if(!task){
            alert("Please Add your Tasks");
            return;
        }
        
        let taskEle = document.createElement("div");
        taskEle.classList.add("task");
        
        let taskContenEle = document.createElement("div");
        taskContenEle.classList.add("content");
        taskContenEle.innerText = task;

        taskEle.appendChild(taskContenEle);

        let taskInput_Ele = document.createElement("input");
        taskContenEle.classList.add("text");
        taskInput_Ele.type = "text";
        taskInput_Ele.setAttribute("readonly", "readonly");

        let taskActionEle = document.createElement("div");
        taskActionEle.classList.add("actions");

        let taskEditEle = document.createElement("button");
        taskEditEle.classList.add("edit");
        taskEditEle.innerHTML = "Edit";

        let taskDeleteEle = document.createElement("button");
        taskDeleteEle.classList.add("delete");
        taskDeleteEle.innerHTML = "Delete";

        taskActionEle.appendChild(taskEditEle);
        taskActionEle.appendChild(taskDeleteEle);

        taskEle.appendChild(taskActionEle);

        list.appendChild(taskEle);

        input.value = "";

        taskEditEle.addEventListener('click', (e) => {
            if(taskEditEle.innerText.toLowerCase() == "edit"){
                taskInput_Ele.removeAttribute("readonly");
                taskInput_Ele.focus();
                taskEditEle.innerText = "Save";
            }
            else{
                taskInput_Ele.setAttribute("readonly", "readonly");
                taskEditEle.innerHTML = "Edit";
            }
        });

        taskDeleteEle.addEventListener('click', (e) => {
            list.removeChild(taskEle);
        });
    });
});
