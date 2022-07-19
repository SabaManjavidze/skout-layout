const contactList = document.querySelector(".contacts");
const contacts = [
  {
    title: "New York",
    phoneNum: "+1 631-203-6600",
    address: "423 W 55th St. 7th Floor New York, NY, 10019",
  },
  {
    title: "Corporate Headquarters",
    phoneNum: "+1 631-203-6600",
    address: "270 S. Service Road, Suite 55 Melville, NY, 11747",
  },
  {
    title: "EMEA",
    phoneNum: "+353-1-6600800",
    address:
      "IDA Business and Technology Park, Mountrath Road, Unit 2 Portlaoise, Ireland",
  },
];
const renderContacts = () => {
  contacts.map(({ phoneNum, address, title }, index) => {
    const contact = document.createElement("div");
    contact.classList.add("contact");
    contact.innerHTML = `
    <div class="contact-title-cont">
      <h1 class="contact-title">${title}</h1>
      </div>
    <div class="contact-info-cont">
      <h1 class="contact-info">${phoneNum}</h1>
      <h1 class="contact-info">${address}</h1>
    <a class="view-map">
    View Map
    </a>
      </div>
    </div>
    `;
    contactList.appendChild(contact);
  });
};

if (contactList) renderContacts();
