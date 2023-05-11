function contactContent() {
  // contact
  const contactBG = document.createElement("div");
  contactBG.className = "contact-page";
  const contactTitle = document.createElement("h1");
  contactTitle.className = "contact-title";
  contactTitle.textContent = "CONTACT US";

  const contactDetail = document.createElement("ul");
  contactDetail.className = "contact-ul";
  const contactLI1 = document.createElement("li");
  contactLI1.textContent = "Email: contact@fakecompany.com";
  const contactLI2 = document.createElement("li");
  contactLI2.textContent = "Phone: +1 (555) 123-4567";
  const contactLI3 = document.createElement("li");
  contactLI3.textContent = "Facebook: https://www.facebook.com/fakecompany";

  contactDetail.append(contactLI1, contactLI2, contactLI3);

  const contactLocation = document.createElement("div");
  contactLocation.className = "contact-location";
  const locationTitle = document.createElement("h2");
  locationTitle.textContent = "VISIT US";
  locationTitle.className = "location-title";
  const locationAddress = document.createElement("p");
  locationAddress.className = "location-address";
  locationAddress.textContent = "Address: 123 Main Street, Anytown, USA";
  const locationIMG = document.createElement("img");
  locationIMG.src =
    "https://images.pexels.com/photos/3262277/pexels-photo-3262277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  locationIMG.alt = "Brown Bar Stools in Front of a big mirror";
  contactLocation.append(locationTitle, locationAddress, locationIMG);

  contactBG.append(contactTitle, contactDetail, contactLocation);

  const contactSection = document.createElement("section");
  contactSection.className = "contact";
  contactSection.appendChild(contactBG);

  const contentDIV = document.querySelector("#content");
  contentDIV.appendChild(contactSection);
}

export default contactContent;
