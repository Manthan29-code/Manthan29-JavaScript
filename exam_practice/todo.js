const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function () {
    const taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Task cannot be empty.");
        return;
    }

    const listItem = document.createElement('li');

    const taskText = document.createElement('span');
    taskText.textContent = taskValue;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    
    
    
    completeBtn.addEventListener('click', function () {
        taskText.style.color = 'green';
        taskText.style.textDecoration = 'line-through';
    });
    
    const editContentBtn = document.createElement('button');
    editContentBtn.textContent = 'editContent';

    editContentBtn.addEventListener('click', function () {
        const input=document.createElement('input')
        input.type='text';
        input.id='textEdit';
        input.placeholder='enter edited content';
        
        //submit button to apply change
        const set=document.createElement("button")
        set.textContent="done";
        
        set.addEventListener('click',()=>{
            taskText.textContent =document.getElementById('textEdit').value;
            listItem.removeChild(input);
            listItem.removeChild(set);
        })

        listItem.appendChild(input);
        listItem.appendChild(set);
        // const content=prompt("enter content");
        // taskText.innerText=content;
    });
    
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', function () {
        taskList.removeChild(listItem);
    });

    listItem.appendChild(taskText);
    listItem.appendChild(completeBtn);
    listItem.appendChild(removeBtn);
    listItem.appendChild(editContentBtn);

    taskList.appendChild(listItem);

    taskInput.value = "";
});