function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let menuIcon = document.querySelector(".menu-icon");

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-280px";
        setTimeout(() => {
            menuIcon.style.display = "block"
        }, 300);
    } else {
        sidebar.style.left = "0px";
        menuIcon.style.display = "none";
    }
}
