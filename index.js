let lenis

const text = document.querySelector('.hero_text');
const goToTop = document.querySelector('.hero_gallery_info_action');

const init = () => {
    lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        smoothTouch: true,
    })

    lenis.on('scroll', ({scroll}) => {
        text.style.transform = `translate3D(${-scroll}px, 0, 0`;
    })

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);

    addEventListener()
};

const addEventListener = () => {
    goToTop.addEventListener('click', () => lenis.scrollTo(1, {lerp: 0.05}))
}

init();

