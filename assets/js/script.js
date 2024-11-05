'use strict';

/**
 * header
 */


// Function to load the header
function loadHeader() {
  const header = document.querySelector('header[data-header]');

  const headerContainers = document.querySelectorAll('.header-container');

  headerContainers.forEach(container => {
      container.appendChild(header.cloneNode(true));
  });
}

window.onload = loadHeader;


/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * popup
 */


document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const openPopupLinks = document.querySelectorAll('.open-popup');
  const closePopupButton = document.querySelector('.close');
  const popupTitle = document.getElementById('popup-title');
  const popupContent = document.getElementById('popup-content');
  const popupImage = document.getElementById('popup-image');

  // Open the pop-up for each image
  openPopupLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      // Set different content based on the clicked image
      if (index === 0) {
        popupTitle.textContent = "Julia";
        popupContent.textContent = "Joined on March 15, 2021";
        const popupImage = document.getElementById('popup-image');
        popupImage.src = './assets/images/author-1.jpg'; // Ensure this path is correct
        const popupImgSection = document.getElementById('popupimg1');
        popupImgSection.style.display = 'block'; // Show the section

      } else if (index === 1) {
        popupTitle.textContent = "Clara Winters";
        popupContent.textContent = "Joined on April 10, 2022";
        const popupImage = document.getElementById('popup-image');
        popupImage.src = './assets/images/author-2.jpg'; // Ensure this path is correct
        const popupImgSection = document.getElementById('popupimg1');
        popupImgSection.style.display = 'block'; // Show the section

      } else if (index === 2) {
        popupTitle.textContent = "John";
        popupContent.textContent = "Joined on June 5, 2020";
        const popupImage = document.getElementById('popup-image');
        popupImage.src = './assets/images/author-3.jpg'; // Ensure this path is correct
        const popupImgSection = document.getElementById('popupimg1');
        popupImgSection.style.display = 'block'; // Show the section

      } else if (index === 3) {
        popupTitle.textContent = "Sophie Morales";
        popupContent.textContent = "Joined on January 22, 2023";
        const popupImage = document.getElementById('popup-image');
        popupImage.src = './assets/images/author-4.jpg'; // Ensure this path is correct
        const popupImgSection = document.getElementById('popupimg1');
        popupImgSection.style.display = 'block'; // Show the section

      } else if (index === 4) {
        popupTitle.textContent = "Nora Patel";
        popupContent.textContent = "Joined on February 14, 2021";
        const popupImage = document.getElementById('popup-image');
        popupImage.src = './assets/images/author-5.jpg'; // Ensure this path is correct
        const popupImgSection = document.getElementById('popupimg1');
        popupImgSection.style.display = 'block'; // Show the section
      }

      // Show the popup
      popup.style.display = 'flex';
      popupContent.classList.add('show');
    });
  });

  // Close the pop-up when the close button is clicked
  closePopupButton.addEventListener('click', () => {
      popupContent.classList.remove('show');
      setTimeout(() => {
          popup.style.display = 'none';
      }, 0);
  });

  // Close the pop-up when clicking outside of the content
  window.addEventListener('click', (event) => {
      if (event.target === popup) {
          closePopupButton.click();
      }
  });
});


/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * search bar toggle
 */

const searchBar = document.querySelector("[data-search-bar]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleSearchBar = function () {
  searchBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(searchTogglers, "click", toggleSearchBar);