document.addEventListener('DOMContentLoaded', () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((response) => response.json())
    .then((dogsObject) => {
      addDogImages(dogsObject);
  });

  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(dogBreedsObject => {
      addBreeds(dogBreedsObject);
  });

  document.getElementById('breed-dropdown').addEventListener('change', filterBreedsByLetter);

  function addBreeds(dogBreedsObject) {
    const ul = document.getElementById('dog-breeds');
    Object.keys(dogBreedsObject.message).forEach(function (key) {
      const li = document.createElement('li');
      li.innerHTML = `${key}`;
      ul.appendChild(li);
      li.addEventListener('click', () => {
        li.style.color = 'red';
      });
    });
  }

  function filterBreedsByLetter(event) {
    const breedsListItems = document.querySelectorAll('li');
      breedsListItems.forEach((breed) => {
        if(!breed.innerHTML.startsWith(event.target.value)){
          breed.style.display = 'none';
        } else {
          breed.style.display = 'list-item';
        }
    });
  }

  function addDogImages(dogsObject) {
    const div = document.querySelector('#dog-image-container');
    
    Object.keys(dogsObject.message).forEach(function (key) {
      const img = document.createElement('img');
      img.src = dogsObject.message[key];
      img.width = '300';
      img.height = '300';
      div.appendChild(img);
    });
  }
});