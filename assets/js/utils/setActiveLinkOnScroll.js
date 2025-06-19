export default function setActiveLinkOnScroll(){
    const sections = document.querySelectorAll("section[id]");
    const navLinksMobile = document.querySelectorAll(".nav-links-mobile a");
    const navLinksDesktop = document.querySelectorAll(".nav-links-desktop a");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            const linkMobile = document.querySelector(`.nav-links-mobile a[href="#${id}"]`);
            const linkDesktop = document.querySelector(`.nav-links-desktop a[href="#${id}"]`);

            if(entry.isIntersecting){
                navLinksDesktop.forEach((a) => {
                    a.classList.remove("active");
                    linkDesktop?.classList.add("active");
                });
                
                navLinksMobile.forEach((a) => {
                    a.classList.remove("active");
                    linkMobile?.classList.add("active");
                });
            }
        })
    }, {
        rootMargin: "-50% 0px -90% 0px",
        threshold: 0,
    });

    sections.forEach((section) => observer.observe(section));
}

