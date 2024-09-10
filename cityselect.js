document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', event => {
      const selectedCity = event.target.textContent;
      document.getElementById('dropdownMenuLink').textContent = selectedCity;
    });
  });


let varanasiOption = document.getElementById('vns');
var searchButton = document.querySelector('.search-btn');
var selectedCity = null;

document.querySelectorAll('.dropdown-item').forEach((item) => {
  item.addEventListener('click', () => {
    selectedCity = item.id;
  });
});


searchButton.addEventListener('click', () => {
  
  if (selectedCity === 'vns') {
  
    window.location.href = 'tasteofvaranasi.html'; 
  }
});

let prayagrajOption = document.getElementById('pyg');
var searchButton = document.querySelector('.search-btn');
var selectedCity = null;

document.querySelectorAll('.dropdown-item').forEach((item) => {
  item.addEventListener('click', () => {
    selectedCity = item.id;
  });
});

searchButton.addEventListener('click', () => {
  if (selectedCity === 'pyg') {
    window.location.href = 'tasteofprayagraj.html';
  }
});