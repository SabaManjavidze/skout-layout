(menuBtn = document.querySelector("#btn")),
  (pageWrapper = document.querySelector("#page-wrapper")),
  (sidebarBtns = document.querySelectorAll(".item")),
  (dotBtns = document.querySelectorAll(".dot-btn"));

dotBtns;

const activeTab = () => {
  sidebarBtns.forEach((item) => {
    // console.log(sidebarBtns);
    const href = window.location.href.split("/");
    if (
      href[href.length - 1]
        .split(".html")[0]
        .includes(item.innerText.toLowerCase().replaceAll(" ", ""))
    ) {
      item.classList.add("active");
    }
  });
};
const essentials_info = [
  {
    title: "System Patching",
    desc: "There’s nothing hackers love more than a dismissed update reminder. We keep your team’s computers in shape and up-to-date.",
    image: "https://getskout.com/wp-content/uploads/2019/05/icon01.svg",
  },
  {
    title: "End-to-End Protection",
    desc: "51% of breaches involved malware that infects endpoints. We cover your bases.",
    image:
      "https://getskout.com/wp-content/uploads/2019/06/SKOUT_Icons_Radio-Silence_1x.png",
  },
  {
    title: "Empowering Teams",
    desc: "With 43% of breaches involving social attacks, cybersecurity is a team sport. We get your employees up to speed.",
    image: "https://getskout.com/wp-content/uploads/2019/05/icon03.svg",
  },
  {
    title: "Secure Credentials",
    desc: "81% of attacks involve stolen or weak credentials. ",
    image: "https://getskout.com/wp-content/uploads/2019/05/icon04.svg",
  },
];

const cyberEssentials = () => {
  const essentialsList = document.querySelector(".essentials-list");
  essentials_info.map(({ title, desc, image }) => {
    const li = document.createElement("li");
    li.classList.add("essential-card");
    const cardDesc = document.createElement("div");
    cardDesc.classList.add("card-desc");
    const cardIcon = document.createElement("div");
    cardIcon.classList.add("card-icon");
    const toolTip = document.createElement("div");
    toolTip.classList.add("tool-tip");
    const h1 = document.createElement("h3");
    h1.innerHTML = title;
    const p = document.createElement("p");
    p.innerHTML = desc;
    const img = document.createElement("img");
    img.src = image;

    cardDesc.appendChild(h1);
    cardDesc.appendChild(p);
    cardIcon.appendChild(img);
    toolTip.innerHTML = `<i class="icon-exclamation-sign"></i>`;
    li.appendChild(cardDesc);
    li.appendChild(cardIcon);
    li.appendChild(toolTip);
    essentialsList.appendChild(li);
  });
};
window.onload = () => {
  const splitHref = window.location.href.split("/");
  const currPage = splitHref[splitHref.length - 1].replace(".html", "");
  if (currPage === "home") {
    cyberEssentials();
  }
  activeTab();
};
menuBtn.addEventListener("click", (event) => {
  menuBtn.classList.toggle("active");
  sidebarBox.classList.toggle("active");
});

window.addEventListener("keydown", (event) => {
  if (sidebarBox.classList.contains("active") && event.keyCode === 27) {
    menuBtn.classList.remove("active");
    sidebarBox.classList.remove("active");
  }
});
