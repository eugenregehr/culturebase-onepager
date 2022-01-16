const Modal = () => {
  // update fullpage height on accordion collapse
  // sets higher z-index if modal is active
  let modalList = [...document.querySelectorAll('.modal')];
  const main = document.getElementById('main');

  modalList.forEach((item) => {
    item.addEventListener('show.bs.modal', (e) => {
      main.classList.add('modal-active');
      htmlVideo({
        target: e.target,
        action: "play"
      });
    })
    item.addEventListener('hide.bs.modal', (e) => {
      main.classList.remove('modal-active');
      htmlVideo({
        target: e.target,
        action: "pause"
      });
    })
  })
}

const htmlVideo = ({ target, action }) => {
  let htmlVideo = target.getElementsByTagName("video")[0];

  if (htmlVideo) htmlVideo[action]();
}


export default Modal