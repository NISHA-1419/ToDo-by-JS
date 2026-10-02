//To-Do basic app ny js 

let Task_List = [];
let Task = prompt("Enter the request :");
 //loop

while(true) {

    if(Task == "Quit")   { 
        console.log("You Quit the app!!");
        break;
    }

    if (Task == "List") {
        console.log("________________");
        for(let i=0; i< Task_List.length; i++) {
            console.log(i, Task_List[i]);
        }
        console.log("________________");
    } 
    else if (Task == "Add") {
        let addition = prompt("Enter a task you want to add");
        Task_List.push(addition);
        console.log("task added!!");
    }
    else if (Task == "Delete") {
        let index = prompt("Enter the index of a task");
        Task_List.splice(index,1 );
        console.log("Task deleted");
    }
    else {
        console.log("Wrong Input");
    }

    Task = prompt("Enter the request :");
}