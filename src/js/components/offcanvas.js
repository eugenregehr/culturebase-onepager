import * as bootstrap from "bootstrap";

const Offcanvas = () => {
  let navigationRight = document.getElementById('navigationRight');
  let navigationRightCanvas = new bootstrap.Offcanvas(navigationRight)
  let navigation = [...document.querySelectorAll('.navigation__link')];

  navigation.forEach((nav) => {
    nav.addEventListener("click", () => {
      navigationRightCanvas.hide();
    })
  })
  bringMainToFront();
}

// sets higher z-index if offcanvas is active 
const bringMainToFront = () => {
  let videoInfos = [...document.querySelectorAll('.video-info__canvas')];
  let main = document.getElementById('main');

  if (videoInfos.length > 0) {
    videoInfos.forEach((info) => {
      info.addEventListener('show.bs.offcanvas', function (e) {
        main.classList.add('modal-active')
      })
      info.addEventListener('hide.bs.offcanvas', function () {
        main.classList.remove('modal-active')
      })
    })
  }

}

export default Offcanvas  