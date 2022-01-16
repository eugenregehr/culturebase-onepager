import "fullpage.js/vendors/scrolloverflow"
import FullpageJS from "fullpage.js"

const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

const fullpage = () => {
    new FullpageJS('#fullpage', {
        menu: "#navigation",
        // anchors: ['hero', 'accordion', 'slides'],
        navigation: true,
        slidesNavigation: true,
        scrollOverflow: true,
        scrollingSpeed: 1000,
        scrollOverflowOptions: {
            disablePointer: isTouchDevice() ? false : true
        }
    });
}

export default fullpage  