const navigation = document.querySelector('.navbar') as HTMLElement | null;

const navigationHeight = navigation ? navigation.offsetHeight : 0;

document.documentElement.style.setProperty('--scroll-padding', `${navigationHeight}px`);