import EmblaCarousel, { EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay';

// nav autoscroll
const navigation = document.querySelector('.navbar') as HTMLElement;
const navigationHeight = navigation ? navigation.offsetHeight + 20 : 0;
document.documentElement.style.setProperty('--scroll-padding', `${navigationHeight}px`);

// carousels for rescues
const emblaNodes = [...document.querySelectorAll('.embla')] as HTMLDivElement[];
const options: EmblaOptionsType = { loop: true, align: 'center' };
const carousels = emblaNodes.map((emblaNode) => {
    const autoplay = Autoplay();
    const carousel = EmblaCarousel(emblaNode, options, [autoplay]);

    autoplay.play();

    emblaNode.addEventListener('mouseenter', () => autoplay.stop());
    emblaNode.addEventListener('mouseleave', () => autoplay.play());

    return carousel;
});
