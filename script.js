const createIssueBtn = document.getElementById("create-issue-btn");
const createIssueInput = document.getElementById("create-issue-input");
const todoContainer = document.getElementById("todo");
const containers = document.querySelectorAll(".container");

createIssueBtn.addEventListener("click", () => {
    createIssueBtn.style.display = "none";
    createIssueInput.style.display = "block";
})

createIssueInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        const card = document.createElement("div");
        card.className = 'card';
        card.innerText = e.target.value.trim();

        card.draggable = true;
        card.addEventListener("dragstart", onDragStart);

        todoContainer.appendChild(card);
        createIssueBtn.style.display = "block";
        createIssueInput.style.display = "none";
        e.target.value = '';
    }
})

// for(let i = 0; i < containers.length; i++){
//     containers[i].addEventListener("dragover", onDragOver);
//     containers[i].addEventListener("drop", onDrop);
// }
containers.forEach(container => {
    container.addEventListener("dragover", onDragOver);
    container.addEventListener("drop", onDrop);
});

let draggedCard = null;

function onDragStart(event){
    draggedCard = event.target;
}

function onDragOver(event){
    if(draggedCard.parentNode.id === event.currentTarget.id){
        return;
    }
    event.preventDefault();
}

function onDrop(event){
    event.target.appendChild(draggedCard);
}
