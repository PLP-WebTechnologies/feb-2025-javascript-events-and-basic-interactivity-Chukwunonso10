// 1. Button Click ✅
const btn = document.querySelector(".submit");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  alert("Message sent successfully!");
});

// 2. Hover Effects ✅
const navLinks = document.querySelectorAll("ul li");
navLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.color = "darkblue";
  });
  link.addEventListener("mouseout", () => {
    link.style.color = "";
  });
});

// 3. Keypress Detection ✅
window.addEventListener("keypress", (e) => {
  console.log(`You pressed: ${e.key}`);
});

// 4. Bonus: Double-click + Long Press 🤫
const header = document.querySelector("#header");

// Double-click changes background color
header.addEventListener("dblclick", () => {
  header.style.backgroundColor =
    header.style.backgroundColor === "orange" ? "lightgreen" : "orange";
});

// Long press: hold mouse for 1.5 seconds
let pressTimer;
header.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    alert("Secret Long Press Activated! 🤫");
  }, 1500);
});

header.addEventListener("mouseup", () => clearTimeout(pressTimer));
header.addEventListener("mouseleave", () => clearTimeout(pressTimer));

// 5. Image Gallery Logic 🖼️
const images = [
  "images/Leonardo_Phoenix_10_A_frazzled_male_doctor_or_nurse_with_a_mix_2.jpg",
  "images/Leonardo_Phoenix_10_A_futuristic_interconnected_network_graphi_1.jpg",
];
let currentIndex = 0;
const galleryImage = document.getElementById("galleryImage");

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  galleryImage.src = images[currentIndex];
}

// 6. Tabs Logic 🗂️
function openTab(evt, tabName) {
  const tabcontent = document.querySelectorAll(".tabcontent");
  const tablinks = document.querySelectorAll(".tablinks");

  tabcontent.forEach((tab) => (tab.style.display = "none"));
  tablinks.forEach((tab) => tab.classList.remove("active"));

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Optional: Activate first tab on load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".tablinks").click();
});
