import EmblaCarousel from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay';

// grab elements
const navigation = document.querySelector('.navbar') as HTMLElement;
const emblaNode = document.querySelector('.embla') as HTMLElement;

// nav autoscroll
const navigationHeight = navigation ? navigation.offsetHeight + 20 : 0;
document.documentElement.style.setProperty('--scroll-padding', `${navigationHeight}px`);

// carousels for rescues
const options = {
    loop: true
};

const plugins = [Autoplay()];

const emblaApi = EmblaCarousel(emblaNode, options, plugins);

console.log(emblaApi.slideNodes());
