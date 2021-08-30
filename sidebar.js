const btn=document.getElementById("menu_btn");
function togglesidebar() {
    document.body.classList.toggle("collapse-sidebar");
}

btn.addEventListener("click", togglesidebar);

