const activateTab = (e) => {
  const { target } = e;
  const currTab = document.querySelector(".current-tab");
  currTab.classList.remove("current-tab");
  target.classList.add("current-tab");
};
(() => {
  const currTab = window.location.href.split("#")[1];
  if (currTab) {
    const currTabElem = document.querySelector(".current-tab");
    if (currTabElem.innerHTML !== currTab) {
      currTabElem.classList.remove("current-tab");
      const realTab = document.querySelector(`[href='#${currTab}']`);
      realTab.classList.add("current-tab");
    }
  }
})();
