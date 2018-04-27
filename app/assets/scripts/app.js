import MobileMenu from './modules/mobilemenu';
import RevealOnScroll from './modules/revealScroll';
import StickyHeader from './modules/StickyHeader';
import smoothScroll from 'jquery-smooth-scroll';

var mobileMenu = new MobileMenu();
new RevealOnScroll(".feat-item", "85%");
new RevealOnScroll(".testimonial", "60%");
var stickyHeader = new StickyHeader();