const navDialog = document.getElementById("nav-dialog")
function handleMenu(){
    navDialog.classList.toggle("hidden")
}
document.getElementById("date").innerHTML=new Date().getFullYear();