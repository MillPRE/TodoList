function onEnter(event){
    if(event.keyCode === 13){
        console.log(event.currentTarget.value);
    }
}

function onClick(){
    const todo = document.getElementById("todo");
    console.log(todo.value);
}
