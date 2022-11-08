function onEnter(event){
    if(event.keyCode === 13){
        if(event.currentTarget.value !== ''){
            addTodo(event.currentTarget.value);
        }
    }
}

function onClick(){
    const todo = document.getElementById("todo");
    if(todo.value !== ''){
        addTodo(todo.value);
    }
}

function addTodo(text){
    const ul = document.getElementById('todo-list-ul');
    const li = document.createElement('li');
    const textNode = document.createTextNode(text);

    li.appendChild(textNode);
    ul.appendChild(li);
}
