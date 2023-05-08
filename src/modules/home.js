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
  homeUL.appendChild(li1);
  homeUL.appendChild(li2);
  homeUL.appendChild(li3);

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
  scheduleUL.appendChild(scheduleLI1);
  scheduleUL.appendChild(scheduleLI2);
  scheduleUL.appendChild(scheduleLI3);
  scheduleUL.appendChild(scheduleLI4);

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
}
