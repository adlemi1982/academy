// -----------------------------------------
// Definiendo los objetos del formulario
// -----------------------------------------

const txbTitle = document.getElementById("txtTitle") as HTMLInputElement;
const txbDescription = document.getElementById("txbDescription") as HTMLInputElement;
const txbPriority = document.getElementById("txbPriority") as HTMLInputElement;
const btnAddTask = document.getElementById("btnAdd") as HTMLButtonElement;
const btnCleanTask = document.getElementById("btnClean") as HTMLButtonElement;

if(txbTitle === null){
    throw Error("Objeto inválido 'txbTitle'");
}

if(txbDescription === null){
    throw Error("Objeto inválido 'txbDescription'");
}

if(txbPriority === null){
    throw Error("Objeto inválido 'txbPriority'");
}

if(btnAddTask === null){
    throw Error("Objeto inválido 'btnAddTask'");
}else{
    btnAddTask.addEventListener("click", ()=> {      
        if(txbTitle.value && txbDescription.value && txbPriority.value){
            // TODO: Add task             
        }  
    });
}

if(btnCleanTask === null){
    throw Error("Objeto inválido 'btnCleanTask'");
}else{
    btnCleanTask.addEventListener("click", ()=> {        
        txbTitle.value = "";
        txbDescription.value = "";
        txbPriority.value = "1";
    });
}


// -----------------------------------------
// Definiendo los objetos del panel
// ----------------------------------------

const taskListTitle = document.getElementById("taskListTitle") as HTMLInputElement;
const taskList = document.getElementById("taskList") as HTMLInputElement;

if(taskListTitle === null){
    throw Error("Objeto inválido 'taskListTitle'");
}

if(taskList === null){
    throw Error("Objeto inválido 'taskList'");
}