import $ from "jquery";

const Collapse = () => {
  // update fullpage height on accordion collapse
  let collapsibleList = [...document.querySelectorAll('.collapse')];
  collapsibleList.forEach((item) => {
    item.addEventListener('shown.bs.collapse', () => {
      // fullpage_api.reBuild();

      // let iscroll = fullpage_api.getActiveSection().item.querySelector('.fp-scrollable');

      // if (iscroll) iscroll["fp_iscrollInstance"].scrollTo(0, -230, 500);
      $.fn.fullpage.reBuild();

    })
    item.addEventListener('hidden.bs.collapse', () => {
      // fullpage_api.reBuild();
      $.fn.fullpage.reBuild();
    })
  })
}

export default Collapse