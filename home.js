const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterablecards = document.querySelectorAll(".filterable_cards .card");

// Define the filtercards function 

const filtercards =  e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    // Iterate over each filterable card
    filterablecards.forEach(card => {
          // Add "hide" class to hide the card initially
          card.classList.add("hide");
          // Check if the card matches the selected filter or "all" is selected
          if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
          }
    });
};

// Add click event listener to each filter button
filterButtons.forEach(button => button.addEventListener("click", filtercards));


// Script for FAQ's
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('active');
  });
});

// Script for Search Bar 
function searchDestination() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  const destinations = {
    "munnar": "./resorts/munnar.html",
    "bangalore": "./resorts/bangalore.html",
    "odisha": "./resorts/odisha.html",
    "andaman": "./resorts/an.html",
    "andaman and nicobar": "./resorts/an.html",
    "kerala": "./resorts/kerala.html"
  };

  if (destinations[input]) {
    window.location.href = destinations[input];
  } else {
    alert("Destination not found. Try Munnar, Bangalore, Odisha, Kerala, or Andaman.");
  }
}