// 'use strict';

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


// /**
//  * add event on element
//  */

// const addEventOnElem = function (elem, type, callback) {
//   if (elem.length > 1) {
//     for (let i = 0; i < elem.length; i++) {
//       elem[i].addEventListener(type, callback);
//     }
//   } else {
//     elem.addEventListener(type, callback);
//   }
// }



/**
 * popup
 */


document.addEventListener('DOMContentLoaded', () => {
  // Check if the current page is index.html
  if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
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
          popupImage.src = './assets/images/author-1.jpg'; // Ensure this path is correct
          document.getElementById('popupimg1').style.display = 'block'; // Show the section

        } else if (index === 1) {
          popupTitle.textContent = "Clara Winters";
          popupContent.textContent = "Joined on April 10, 2022";
          popupImage.src = './assets/images/author-2.jpg'; // Ensure this path is correct
          document.getElementById('popupimg1').style.display = 'block'; // Show the section

        } else if (index === 2) {
          popupTitle.textContent = "John";
          popupContent.textContent = "Joined on June 5, 2020";
          popupImage.src = './assets/images/author-3.jpg'; // Ensure this path is correct
          document.getElementById('popupimg1').style.display = 'block'; // Show the section

        } else if (index === 3) {
          popupTitle.textContent = "Sophie Morales";
          popupContent.textContent = "Joined on January 22, 2023";
          popupImage.src = './assets/images/author-4.jpg'; // Ensure this path is correct
          document.getElementById('popupimg1').style.display = 'block'; // Show the section

        } else if (index === 4) {
          popupTitle.textContent = "Nora Patel";
          popupContent.textContent = "Joined on February 14, 2021";
          popupImage.src = './assets/images/author-5.jpg'; // Ensure this path is correct
          document.getElementById('popupimg1').style.display = 'block'; // Show the section
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
  }
});



/**
 * navbar toggle
 */

// Selecting elements
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

// Toggle Navbar function
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active"); // Toggle "active" class on the toggler itself
}

// Add event listener to toggle navbar on clicking the toggler
navToggler.addEventListener("click", toggleNavbar);

// Close Navbar function
const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

// Loop through all navbar links and add event listeners to close the navbar when a link is clicked
navbarLinks.forEach(link => {
  link.addEventListener("click", closeNavbar);
});



/**
 * search bar toggle
 */

// Selecting elements
const searchBar = document.querySelector("[data-search-bar]");
const searchTogglers = document.querySelectorAll("[data-search-toggler]");
const overlay = document.querySelector("[data-overlay]");

// Function to toggle the search bar and overlay
const toggleSearchBar = function () {
  searchBar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

// Loop through all the search togglers and attach the event listener
searchTogglers.forEach(toggler => {
  toggler.addEventListener("click", toggleSearchBar);
});

// Comment Section

document.addEventListener('DOMContentLoaded', () => {
  // Function to load comments for each blog
  const loadComments = (blogId) => {
      // Get the comments list element for the current blog
      const commentsList = document.getElementById(`comments-list-${blogId}`);

      // If no comments list is found, log an error and return
      if (!commentsList) {
          console.error(`No comments list found for blog ${blogId}`);
          return;
      }

      // Get the saved comments from localStorage or set an empty array if none exist
      const savedComments = JSON.parse(localStorage.getItem(`comments-${blogId}`)) || [];

      // Clear the current comments
      commentsList.innerHTML = '';

      // Display the saved comments
      savedComments.forEach(comment => {
          const commentElement = document.createElement('div');
          commentElement.classList.add('comment');
          commentElement.innerHTML = `<strong>${comment.name}</strong>: <p>${comment.text}</p>`;
          commentsList.appendChild(commentElement);
      });
  };

  // Function to handle posting a new comment
  const postComment = (blogId) => {
      const nameInput = document.getElementById(`name-${blogId}`);
      const commentInput = document.getElementById(`comment-${blogId}`);
      const name = nameInput.value.trim();
      const commentText = commentInput.value.trim();

      // Only proceed if both name and comment are not empty
      if (name && commentText) {
          const savedComments = JSON.parse(localStorage.getItem(`comments-${blogId}`)) || [];

          // Add the new comment to the list
          savedComments.push({ name, text: commentText });

          // Save the updated list of comments to localStorage
          localStorage.setItem(`comments-${blogId}`, JSON.stringify(savedComments));

          // Reload comments to show the new one
          loadComments(blogId);

          // Clear the input fields
          nameInput.value = '';
          commentInput.value = '';
      }
  };

  // Add event listeners for each comment form
  const commentForms = document.querySelectorAll('.comment-form');
  commentForms.forEach(form => {
      form.addEventListener('submit', (event) => {
          event.preventDefault();
          const blogId = form.id.split('-')[2]; // Extract the blog ID from the form's ID
          postComment(blogId);
      });
  });

  // Load comments for each blog when the page loads
  const blogs = document.querySelectorAll('.blog');
  blogs.forEach(blog => {
      const blogId = blog.id.split('-')[1]; // Extract the blog ID from the blog element's ID
      loadComments(blogId); // Load comments for each blog
  });
});
