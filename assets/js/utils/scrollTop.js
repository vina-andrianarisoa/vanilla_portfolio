export default function scrollTop(){
    const scrollTopBtn = document.getElementById("scroll-top-btn");

    window.addEventListener("scroll", () => {
        if(scrollY > 50){
            scrollTopBtn.style.display = "flex";
        } else {
            scrollTopBtn.style.display = "none";
        }
    })

    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    });
}