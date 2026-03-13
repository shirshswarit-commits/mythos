const nodes = document.querySelectorAll(".node");

nodes.forEach(node=>{
    node.addEventListener("click",()=>{
        node.classList.toggle("active");
    });
});