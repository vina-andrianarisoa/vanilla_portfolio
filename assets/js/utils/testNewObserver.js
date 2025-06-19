export default function testMyObserver(){
    const targets = document.querySelectorAll(".nav-links-mobile a[href^='#']");
    const titleAbout = document.querySelector(".about-section h2"); 
    const aboutImage = document.querySelector(".about-section .about-wrapper .about-image");


    const linksObserver = new IntersectionObserver((entries => {
        entries.forEach((entry, index) => {

            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, (index + 1) * 450);
            }
        });
    }));

    const titleObserver = new IntersectionObserver((entries => {
        entries.forEach((entry) => {
            const tl = gsap.timeline();

            if (entry.isIntersecting) {
                tl.to(entry.target, {
                    opacity: 0,
                    x: 100,
                    duration: 1,
                })
                .to(entry.target, {
                    opacity: 1,
                    x: 0,
                    duration: 0.5,
                });
            }

            titleObserver.unobserve(entry.target);
        })
    }))

    const imageObserver = new IntersectionObserver((entries => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const tl = gsap.timeline();

                tl
                .to(entry.target, {
                    rotate: 360, scale: 1, opacity: 1, duration: 1
                });

                imageObserver.unobserve(entry.target);
            }

        })
    }), {
        rootMargin: "-100px 0%"
    });

    targets.forEach(target => linksObserver.observe(target));
    titleObserver.observe(titleAbout);
    imageObserver.observe(aboutImage);
}