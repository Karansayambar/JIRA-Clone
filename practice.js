const source = document.querySelector(".source");
const container = document.querySelector(".container");

source.addEventListener("dragstart", () =>{
    source.style.backgroundColor = "blue"
})

source.addEventListener("dragend", () =>{
    source.style.backgroundColor = "white";
})

container.addEventListener("dragenter", () => {
    container.style.border = "2px dashed yellow";
    container.style.transform = "scale(1.5)";
})
container.addEventListener("dragover", (e) => {
    e.preventDefault();
    container.style.backgroundColor = "pink";
    container.style.transform = "scale(1)";
})

container.addEventListener("dragleave", () => {
    container.style.border = "2px solid yellow";
    container.style.backgroundColor = "white";
})
container.addEventListener("drop", () => {
    container.appendChild(source);
    container.style.backgroundColor = "pink";
    container.style.transform = "scale(1)";
})