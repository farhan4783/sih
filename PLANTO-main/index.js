// // Select all SVG elements with the class "nav-svg"
// const navSvgs = document.querySelectorAll('.nav-svg');

// // Add an event listener to each SVG element
// navSvgs.forEach((svg) => {
//   svg.addEventListener('contextmenu', (event) => {
//     // Prevent the default context menu from appearing
//     event.preventDefault();

//     // Your custom right-click behavior goes here
//     console.log('Right-clicked on SVG!');
//     // You can also call a function or trigger an animation here
//   });
// });



// // Select elements
// const plantContainer = document.querySelector('.plant-container');
// const searchContainer = document.querySelector('.search-container');
// const exploreButton = document.querySelector('.explore');
// const readMoreButtons = document.querySelectorAll('.read-more');

// // Add event listeners
// exploreButton.addEventListener('click', () => {
//   console.log('Explore button clicked!');
// });

// readMoreButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     console.log('Read more button clicked!');
//   });
// });

// // Manipulate elements
// plantContainer.style.background = 'linear-gradient(to bottom, #f2f2f2, #fff)';
// searchContainer.style.padding = '20px';

// // Add a new element
// const newElement = document.createElement('div');
// newElement.textContent = 'Hello, World!';
// newElement.style.color = 'green';
// plantContainer.appendChild(newElement);

// document.querySelectorAll('nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });



// Smooth scrolling to section when clicking on anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adding hover effect to all cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)'; // Scale up on hover
        card.style.transition = 'transform 0.3s ease-in-out'; // Smooth transition
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)'; // Revert scale on mouse leave
    });
});

// Dropdown functionality (if not handled by CSS alone)
document.querySelectorAll('.dropdown').forEach(dropdown => {
    const dropbtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    
    dropbtn.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', (e) => {
        if (!e.target.matches('.dropbtn')) {
            dropdownContent.classList.remove('show');
        }
    });
});

// Show dropdown on hover (optional, can be handled by CSS too)
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
});
