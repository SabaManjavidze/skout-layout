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
  const target = document.querySelector(
    `.tip-list > div:nth-child(${childNum})`
  );
  const plusPath = target.querySelector(
    ".tip-title > button > svg > path:nth-child(3)"
  );
  if (target.classList.contains("expanded")) {
    target.classList.remove("expanded");
    plusPath.style.display = "inline";
    return;
  }
  plusPath.style.display = "none";
  target.classList.add("expanded");
};
const renderTips = () => {
  tips.map(({ title, desc, image }, index) => {
    const tip = document.createElement("div");
    tip.classList.add("d-flex");
    tip.classList.add("tip");
    tip.innerHTML = `
    <div class="tip-title d-flex">
    <div class="tip-text d-flex ">
      <h1>${index + 1}</h1>
      <h3>${title}</h3>
    </div>
    <button onclick="expandTip(${index + 1})" style="z-index:9">
<svg width="50" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_0_7642)">
<path d="M19.5 29.1445C26.4036 29.1445 32 23.5481 32 16.6445C32 9.74097 26.4036 4.14453 19.5 4.14453C12.5964 4.14453 7 9.74097 7 16.6445C7 23.5481 12.5964 29.1445 19.5 29.1445Z" fill="white"/>
<path d="M19.5 29.1445C26.4036 29.1445 32 23.5481 32 16.6445C32 9.74097 26.4036 4.14453 19.5 4.14453C12.5964 4.14453 7 9.74097 7 16.6445C7 23.5481 12.5964 29.1445 19.5 29.1445Z" stroke="#22BF95"/>
</g>
<path d="M13.4285 16.9569H25.8456" stroke="#22BF95" stroke-linecap="round"/>
<path d="M19.902 10.573V22.9902" stroke="#22BF95" stroke-linecap="round"/>
<defs>
<filter id="filter0_d_0_7642" x="0.5" y="0.644531" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="3"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.498039 0 0 0 0 0.498039 0 0 0 0 0.498039 0 0 0 0.3 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_7642"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_7642" result="shape"/>
</filter>
</defs>
</svg>

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

if (tipsList) renderTips();
