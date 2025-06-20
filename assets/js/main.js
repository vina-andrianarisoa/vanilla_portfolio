import setActiveLinkOnScroll from "./utils/setActiveLinkOnScroll.js";
import toggleMenuBtn from './utils/toggleMenuBtn.js';
import scrollTop from "./utils/scrollTop.js";
import testMyObserver from "./utils/testNewObserver.js";
import useScrollProgressBar from "./utils/scrollProgressBar.js";

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    gsap.to(loader, {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => loader.remove()
    }); 
});

window.addEventListener("DOMContentLoaded", () => {
    useScrollProgressBar();
    setActiveLinkOnScroll();
    toggleMenuBtn();
    scrollTop();
    testMyObserver();

    const projects = [
        {
            title: "Infinite slide animation",
            description: "Description du projet 1",
            image: "assets/images/project_1.png",
            stack: ["HTML", "CSS", "JS"],
            liveLink: "https://site1.com",
            codeLink: "https://github.com/utilisateur/projet1",
        },
        {
            title: "Toggle theme + border animated",
            description: "Description du projet 2",
            image: "assets/images/project_2.png",
            stack: ["HTML", "CSS", "JS"],
            liveLink: "https://site2.com",
            codeLink: "https://github.com/utilisateur/projet2",
        },
        {
            title: "Card Designed with Swiper JS",
            description: "Description du projet 3",
            image: "assets/images/project_3.png",
            stack: ["HTML", "CSS", "JS"],
            liveLink: "https://site3.com",
            codeLink: "https://github.com/utilisateur/projet3",
        },
        {
            title: "Rock - Paper - Cisor",
            description: "Description du projet ",
            image: "assets/images/project_4.png",
            stack: ["HTML", "CSS", "JS"],
            liveLink: "https://site4.com",
            codeLink: "https://github.com/utilisateur/projet4",
        },
        {
            title: "Formulaire + validation",
            description: "Description du projet 5",
            image: "assets/images/projet_5.png",
            stack: ["HTML", "CSS", "JS"],
            liveLink: "https://site5.com",
            codeLink: "https://github.com/utilisateur/projet5",
        },
    ]
    
    const template = document.getElementById("project-template");
    const grid = document.querySelector(".project-grid");
    const allCards = [];

    projects.forEach(tmp => {
        const clone = template.content.cloneNode(true);
        
        const cardContainer = clone.querySelector(".project-card");
        const img = clone.querySelector("img");
        const title = clone.querySelector("h3");
        const desc = clone.querySelector("p");

        img.src = tmp.image;
        img.alt = `Capture ${tmp.title}`;
        title.textContent = tmp.title;
        desc.innerHTML = `<p><span class="font-bold">Stack :</span> ${tmp.stack.join(", ")}</p>`;
        
        grid.appendChild(clone);
        allCards.push(cardContainer);
        
    })
    
    const mm = gsap.matchMedia();
    const cardObserver = new IntersectionObserver(((entries) => {
        entries.forEach((entry, index) => {
            const el = entry.target;
            const fromX = index % 2 === 0 ? -150 : 150;

            if (entry.isIntersecting) {
                mm.add(
                    "(min-width: 768px)", () => {
                        gsap.set(el, {
                            x: fromX,
                            opacity: 0,
                            duration: 1,
                        })

                        gsap.to(el, {
                            x: 0,
                            opacity: 1,
                            duration: 1
                        })
                    })

                mm.add(
                    "(max-width: 767px", () => {
                        gsap.fromTo(el, 
                            { y: 100, opacity: 0, duration: 1 }, 
                            { y: 0, opacity: 1, duration: 1 }
                        )
                    });

                cardObserver.unobserve(el);
            }
        })
    }), {
        threshold: 0.5
    });

    allCards.forEach((card) => {
        cardObserver.observe(card);
    })
});