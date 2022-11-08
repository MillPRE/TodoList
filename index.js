let numbering = 0;

function onEnter(event){
    if(event.keyCode === 13){
        if(event.currentTarget.value !== ''){
            addTodo(event.currentTarget.value);
            todo.value = '';
        }
    }
}

function onClick(){
    const todo = document.getElementById("todo");
    if(todo.value !== ''){
        addTodo(todo.value);
        todo.value = '';
    }
}

function deleteList(event){
    const ul = document.getElementById('todo-list-ul');
    const target_id = event.path[1].id;
    for(let i = 0 ; i < ul.children.length ; i++){
        if(ul.children[i].id === target_id){
            ul.removeChild(ul.children[i]);
        }
    }
}

function checkList(event){
    const target = event.path[1];
    console.log(target);
    target.setAttribute('class','cheked');
    const check = target.children['check'];
    target.removeChild(check);
}

function addTodo(text){
    const ul = document.getElementById('todo-list-ul');
    const li = document.createElement('li');
    const del = document.createElement('span');
    const check = document.createElement('span');
    let textNode = document.createTextNode(text);
    li.appendChild(textNode);

    textNode = document.createTextNode('❌');
    del.appendChild(textNode);
    del.setAttribute('id','del');
    del.addEventListener('click',function(event){
        deleteList(event);
    });

    textNode = document.createTextNode('✔️');
    check.appendChild(textNode);
    check.setAttribute('id','check');
    check.addEventListener('click',function(event){
        checkList(event);
    });

    li.setAttribute('id',new String(numbering++));
    li.appendChild(del);
    li.appendChild(check);
    ul.appendChild(li);
}
