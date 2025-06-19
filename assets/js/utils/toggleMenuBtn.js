export default function toggleMenuBtn(){
    const toggleMenuBtn = document.getElementById("toggle-menu-btn");
    const closeMenuBtn = document.getElementById("close-menu-btn");
    const navLinks = document.querySelector(".nav-links-mobile");

    let isMenuOpen = false;

    toggleMenuBtn.addEventListener("click", (e) => {
        e.stopPropagation();

        isMenuOpen = !isMenuOpen;

        navLinks.style.transform = isMenuOpen ? "translateY(0%)" : "translateY(-100%)";
    })
    
    closeMenuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        
        isMenuOpen = !isMenuOpen;
        
        navLinks.style.transform = isMenuOpen ? "translateY(0%)" : "translateY(-100%)";
    })

    document.addEventListener("click", (e) => {
        const clickedOutside = !navLinks.contains(e.target) && !toggleMenuBtn.contains(e.target);

        if(isMenuOpen && clickedOutside){
            isMenuOpen = false;
            navLinks.style.transform = "translateY(-100%)";
        }
    })
}