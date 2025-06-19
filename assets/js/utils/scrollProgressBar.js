export default function useScrollProgressBar(){
    const targets = document.querySelectorAll(".progress");

    const progressObserver = new IntersectionObserver(((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const value = el.dataset.value;
                const tl = gsap.timeline();

                tl.to(el, {
                    width: value,
                    duration: 1,
                    ease: "elactic"
                })

                obs.unobserve(el);
            }
        })
    }), {
        threshold: 0.5
    });


    targets.forEach((target) => {
        progressObserver.observe(target);
    })
}