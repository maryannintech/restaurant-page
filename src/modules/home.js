import "./style.css";

function homeContent() {
  // hero section
  const mainElement = document.createElement("main");
  const homeText = document.createElement("div");
  homeText.className = "home-text";
  mainElement.appendChild(homeText);

  const homeTitle = document.createElement("h1");
  homeTitle.className = "title";
  homeTitle.textContent = "VINTAGE DELIGHTS";
  homeText.appendChild(homeTitle);

  const homeNav = document.createElement("nav");
  const homeUL = document.createElement("ul");
  homeUL.className = "nav-ul";
  homeNav.appendChild(homeUL);
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  li1.textContent = "home";
  li2.textContent = "menu";
  li3.textContent = "contact";
  homeUL.append(li1, li2, li3);

  // schedule section
  const homeSchedule = document.createElement("div");
  homeSchedule.className = "schedule";
  const scheduleTitle = document.createElement("h2");
  scheduleTitle.className = "schedule-title";
  scheduleTitle.textContent = "OUR SCHEDULE FROM \n MONDAY TO SATURDAY";
  homeSchedule.appendChild(scheduleTitle);

  const scheduleUL = document.createElement("ul");
  scheduleUL.className = "schedule-ul";
  homeSchedule.appendChild(scheduleUL);
  const scheduleLI1 = document.createElement("li");
  const scheduleLI2 = document.createElement("li");
  const scheduleLI3 = document.createElement("li");
  const scheduleLI4 = document.createElement("li");
  scheduleLI1.textContent = "Breakfast: 8:00am - 11:00am";
  scheduleLI2.textContent = "Lunch: 11:30am - 2:30pm";
  scheduleLI3.textContent = "Afternoon Tea: 3:00pm - 5:00pm";
  scheduleLI4.textContent = "Dinner: 5:30pm - 9:00pm";
  scheduleUL.append(scheduleLI1, scheduleLI2, scheduleLI3, scheduleLI4);

  // reviews
  const homeReview = document.createElement("div");
  homeReview.className = "reviews";
  const reviewH2 = document.createElement("h2");
  reviewH2.textContent = "WHAT OUR CUSTOMERS ARE SAYING";
  homeReview.appendChild(reviewH2);

  const customerDIV = document.createElement("div");
  customerDIV.className = "customers";
  homeReview.appendChild(customerDIV);

  const card1 = document.createElement("div");
  card1.className = "card";
  const img1 = document.createElement("img");
  img1.src =
    "https://images.pexels.com/photos/9395560/pexels-photo-9395560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  img1.alt = "Red Velvet Cake Served with Coffee";
  const cardText1 = document.createElement("p");
  cardText1.className = "card-text";
  cardText1.textContent = `"The cakes at Vintage Delights are simply divine! Every bite was
  pure bliss. I can\'t wait to try more. The red velvet cake was my
  favorite!"`;
  const name1 = document.createElement("p");
  name1.className = "name";
  name1.textContent = "Lisa T.";
  card1.append(img1, cardText1, name1);

  const card2 = document.createElement("div");
  card2.className = "card";
  const img2 = document.createElement("img");
  img2.src =
    "https://images.pexels.com/photos/3968058/pexels-photo-3968058.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";
  img2.alt = "Brown Wooden Table and Chairs Near Window";
  const cardText2 = document.createElement("p");
  cardText2.className = "card-text";
  cardText2.textContent = `"The atmosphere at Vintage Delights is charming and cozy. It\'s the
  perfect place to indulge in a delicious slice of cake and a cup of
  coffee."`;
  const name2 = document.createElement("p");
  name2.className = "name";
  name2.textContent = "Sarah W.";
  card2.append(img2, cardText2, name2);

  const card3 = document.createElement("div");
  card3.className = "card";
  const img3 = document.createElement("img");
  img3.src =
    "https://images.pexels.com/photos/6631965/pexels-photo-6631965.jpeg?auto=compress&cs=tinysrgb&w=600";
  img3.alt = "Lemon Cake on Round Ceramic Plate";
  const cardText3 = document.createElement("p");
  cardText3.className = "card-text";
  cardText3.textContent = ` "I don\'t usually have a sweet tooth, but the cakes at Vintage
  Delights are so delicious that I can\'t resist. The lemon cake is a
  personal favorite."`;
  const name3 = document.createElement("p");
  name3.className = "name";
  name3.textContent = "Julia P.";
  card3.append(img3, cardText3, name3);

  const card4 = document.createElement("div");
  card4.className = "card";
  const img4 = document.createElement("img");
  img4.src =
    "https://images.pexels.com/photos/10581380/pexels-photo-10581380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  img4.alt = "Strawberry Shortcake in a Glass Jar";
  const cardText4 = document.createElement("p");
  cardText4.className = "card-text";
  cardText4.textContent = `"I discovered Vintage Delights by chance and I\'m so glad I did.
  The cakes are made with love and you can taste it in every bite.
  It has become my go-to spot"`;
  const name4 = document.createElement("p");
  name4.className = "name";
  name4.textContent = "Michael C.";
  card4.append(img4, cardText4, name4);

  customerDIV.append(card1, card2, card3, card4);

  // footer
  const homeFooter = document.createElement("footer");
  const footerP = document.createElement("p");
  footerP.textContent = "All photos are from Pexels.com";
  homeFooter.appendChild(footerP);
}

export default function homeContent();
