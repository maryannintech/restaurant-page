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
  const scheduleLI1 = document.createElement("li");
  const scheduleLI2 = document.createElement("li");
  const scheduleLI3 = document.createElement("li");
  const scheduleLI4 = document.createElement("li");
  scheduleLI1.textContent = "Breakfast: 8:00am - 11:00am";
  scheduleLI2.textContent = "Lunch: 11:30am - 2:30pm";
  scheduleLI3.textContent = "Afternoon Tea: 3:00pm - 5:00pm";
  scheduleLI4.textContent = "Dinner: 5:30pm - 9:00pm";
}
