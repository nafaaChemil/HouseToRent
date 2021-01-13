import houseToRent from './houseToRent';
import createCard from './createCard';

const cards = document.querySelector('.cards');

const render = (array) => {
  cards.innerHTML = '';
  array.forEach((house) => {
    createCard(cards, house.name, house.img, house.desc);
  });
};

// On change select (all / flat / house)
// Récupérer sur le click du select la value
// en fonction filtrer le résultat

const filterCard = document.querySelector('.select');

filterCard.addEventListener('click', () => {
  const value = filterCard.value

  if (value === 'All') {
    render(houseToRent);
  } else {
    const houses = houseToRent.filter((house) => house.type === value);
    render(houses);
  }
});

// On search (full text search)

const searchCard = document.getElementById('searchBlabla');  
searchCard.addEventListener('input', () => {
  const wordSearch = searchCard.value.toLowerCase();
  const houses = houseToRent.filter((poulet) => poulet.name.toLowerCase().includes(wordSearch))
  render(houses)
});

// On change (Show only available)

const isAvailable = document.querySelector('.available-checkbox');

isAvailable.addEventListener('click', () => {
    const houseAvailable = isAvailable.checked;
    if(houseAvailable){
    render(houseToRent.filter((house) => house.available));
    if(houseToRent.every( element => element.available === false)){
      alert("Revenez demain");
    };
    }else{
      render(houseToRent)
    }
    
});

// If all house is rent, show a specific message

render(houseToRent);
