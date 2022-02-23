import $ from "jquery";
import "fullpage.js/vendors/scrolloverflow";
// import FullpageJS from "fullpage.js"
import "../plugins/jquery.fullPage";

const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}

const fullpage = () => {
    // new FullpageJS('#fullpage', {
    //     // autoScrolling: false,
    //     menu: "#navigation",
    //     navigation: true,
    //     slidesNavigation: true,
    //     scrollOverflow: true,
    //     scrollingSpeed: 1000,
    //     scrollOverflowOptions: {
    //         disablePointer: isTouchDevice() ? false : true,
    //     }
    // });
    $(document).ready(function () {
        $('#fullpage').fullpage({
            navigation: true,
            menu: "#navigation",
            slidesNavigation: true,
            navigationPosition: 'right',
            slidesNavPosition: 'bottom',
            scrollOverflow: true,
            scrollOverflowEndPrevent: { delay: 350, reversal: false },
            scrollingSpeed: 1000,
            scrollOverflowOptions: {
                disablePointer: isTouchDevice() ? false : true,
            }
        });
    });
}

export default fullpage  