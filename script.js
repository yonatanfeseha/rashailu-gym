'use strict';



// ---------- Add Event On Element
const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length, i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}




// ---------- Navbar Toggle
  const navToggler = document.querySelector("[data-nav-toggler]");
  const navbarList = document.querySelector(".navbar-list");

  navToggler.addEventListener("click", () => {
    navbarList.classList.toggle("active");
  })



const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-bar-toggler]");
const navLinks= document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function (){
    navbar.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
    navLinks.barclassList.remove("active");
}


addEventOnElem(navLinks, "click", closeNavbar);


document.addEventListener("DOMContentLoaded", function () {
    // Get all trainer sections
    const trainerCards = document.querySelectorAll(".profile__card");

    // Iterate through each trainer card
    trainerCards.forEach((card) => {
        const paymentStatus = card.querySelector("#payment-status");

        // Replace this with the actual condition for each trainer
        const isPaid = true; // Example: Change this based on the trainer's payment status

        if (paymentStatus) {
            if (isPaid) {
                paymentStatus.textContent = "Payment Status: Paid";
                paymentStatus.classList.remove("not-paid");
                paymentStatus.classList.add("paid");
            } else {
                paymentStatus.textContent = "Payment Status: Not Paid";
                paymentStatus.classList.remove("paid");
                paymentStatus.classList.add("not-paid");
            }
        }
    });
});
