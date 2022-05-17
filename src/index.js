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

  function addBreeds(dogBreedsObject) {
    const ul = document.getElementById('dog-breeds');
    // console.log(dogBreedsObject.message);
    Object.keys(dogBreedsObject.message).forEach(function (key) {
      const li = document.createElement('li');
      li.innerHTML = `${key}`;
      ul.appendChild(li);
      li.addEventListener('click', () => {
        li.style.color = 'red';
      });
    });
    const breedDropDown = document.getElementById('breed-dropdown');
    breedDropDown.addEventListener('change', (event) => {
      console.log(event.target.value);
    });
    const li = document.querySelectorAll('li')
    console.log(li);
  }

  function addDogImages(dogsObject) {
    const div = document.querySelector('#dog-image-container');
    
    Object.keys(dogsObject.message).forEach(function (key) {
      const img = document.createElement('img');
      img.src = dogsObject.message[key];
      img.width = '300';
      img.height = '300';
      div.appendChild(img);
      // console.log(img);
      // console.log(dogsObject.message[key]);
    });
    // console.log(dogsObject.message[0]);
  }
});


const array = ['affenpinscher',
  'african',
  'airedale',
  'basenji',
  'beagle',
  'cattledog',
  'chihuahua',
  'dachshund',
  'dalmatian',
  'dane']

const startsWithN = array.filter((breed) => breed.startsWith('d'));
// console.log(startsWithN);