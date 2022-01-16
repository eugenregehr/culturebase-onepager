const Collapse = () => {
  // update fullpage height on accordion collapse
  let collapsibleList = [...document.querySelectorAll('.collapse')];
  collapsibleList.forEach((item) => {
    item.addEventListener('shown.bs.collapse', () => {
      fullpage_api.reBuild();
    })
    item.addEventListener('hidden.bs.collapse', () => {
      fullpage_api.reBuild();
    })
  })
}

export default Collapse