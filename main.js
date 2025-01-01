const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".trainer__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".blog__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});




document.addEventListener("DOMContentLoaded", function () {
  // Example to dynamically update payment status
  const statuses = document.querySelectorAll(".status");

  statuses.forEach((status) => {
    if (status.textContent === "Unpaid") {
      status.classList.add("unpaid");
    } else if (status.textContent === "Paid") {
      status.classList.add("paid");
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    // Example user data (this could come from a server or API in a real app)
    const paymentInfo = {
      status: "Active", // Status could be "Active", "Pending", or "Overdue"
      lastPaymentDate: "December 15, 2024",
    };
  
    // Select the elements where payment info will be displayed
    const statusElement = document.querySelector(".payment__status .status");
    const dateElement = document.querySelector(".payment__status .date");
  
    // Update the content dynamically
    if (statusElement && dateElement) {
      statusElement.textContent = paymentInfo.status;
      dateElement.textContent = paymentInfo.lastPaymentDate;
  
      // Optionally, change the color based on payment status
      if (paymentInfo.status === "Overdue") {
        statusElement.style.color = "red";
      } else if (paymentInfo.status === "Pending") {
        statusElement.style.color = "orange";
      } else {
        statusElement.style.color = "green";
      }
    }
  });  