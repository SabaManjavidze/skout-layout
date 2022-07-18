const tipsList = document.querySelector(".tip-list");
const tips = [
  {
    title: "System Patching",
    desc: `There’s nothing hackers love more than a dismissed update reminder.
     We keep our team’s computers in shape and up to date so that they aren’t subject to
     attacks that could otherwise be avoided.
     Not properly updating your systems makes you an easy to reach target 
     and hackers will often go after the lowest hanging fruit.
     When it comes to maintaining a strong cybersecurity network the best thing a user can do is to prevent problems
     before they occur, and the easiest way to do that is 
     by making sure that all systems are updated and updated regularly`,
    image: "https://getskout.com/wp-content/uploads/2019/05/icon01.svg",
  },
  {
    title: "End-to-End Protection",
    desc: `
  51% of breaches involved malware. We cover your bases. Malware is classified as software that is designed with the intention of causing damage to your devices, whether they are phones, servers, laptops, or any other kind of device in the IoT.
Malware often takes the form of code, innocuous content, scripts, or software. With SKOUT’s end-to-end protection you can rest assured that all vulnerable points within your system are accounted for and safeguarded, reducing the risk of falling victim to malware.`,
    image:
      "https://getskout.com/wp-content/uploads/2019/06/SKOUT_Icons_Radio-Silence_1x.png",
  },
  {
    title: "Empowering Teams",
    desc: `
  51% of breaches involved malware. We cover your bases. Malware is classified as software that is designed with the intention of causing damage to your devices, whether they are phones, servers, laptops, or any other kind of device in the IoT.
Malware often takes the form of code, innocuous content, scripts, or software. With SKOUT’s end-to-end protection you can rest assured that all vulnerable points within your system are accounted for and safeguarded, reducing the risk of falling victim to malware.`,
    image: "https://getskout.com/wp-content/uploads/2019/05/icon03.svg",
  },
  {
    title: "Secure Credentials",

    desc: `
  51% of breaches involved malware. We cover your bases. Malware is classified as software that is designed with the intention of causing damage to your devices, whether they are phones, servers, laptops, or any other kind of device in the IoT.
Malware often takes the form of code, innocuous content, scripts, or software. With SKOUT’s end-to-end protection you can rest assured that all vulnerable points within your system are accounted for and safeguarded, reducing the risk of falling victim to malware.`,

    image: "https://getskout.com/wp-content/uploads/2019/05/icon03.svg",
  },
];
const expandTip = (childNum) => {
  console.log(childNum);
  const target = document.querySelector(
    `.tip-list > div:nth-child(${childNum})`
  );
  if (target.classList.contains("expanded")) {
    target.classList.remove("expanded");
    return;
  }
  target.classList.add("expanded");
};
const renderTips = () => {
  tips.map(({ title, desc, image }, index) => {
    const tip = document.createElement("div");
    tip.classList.add("d-flex");
    tip.classList.add("tip");
    if (index == 0) {
      tip.classList.add("expanded");
    }
    tip.innerHTML = `
    <div class="tip-title d-flex">
    <div class="tip-text d-flex ">
      <h1>${index + 1}</h1>
      <h3>${title}</h3>
    </div>
    <button onclick="expandTip(${index + 1})" style="z-index:999">
    <span class="icon-plus-sign"></span>
    </button>
    </div>
    <div class="tip-info">
        <img src="${image || null}" height="200px" width="200px"/>
        <h4>${desc}</h4>
    </div>
    `;
    tipsList.appendChild(tip);
  });
};

window.onload = () => {
  console.log("hello");
  if (tipsList) renderTips();
};
