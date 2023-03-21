function doSomething() {

  const weatherAPI = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/21030?unitGroup=us&key=VZYLFZ7ATQGTGAQNBXLQT5EH8&contentType=json";
  
  let weatherData;
  
  fetch(weatherAPI)
    .then(response => response.json())
    .then(data => {
      weatherData = data;
      console.log(weatherData);
      weatherUpdate(weatherData);
    })
    .catch(error =>{
      console.error(error);
    });


  const expandsMore = document.querySelectorAll('[expand-more]');

  function expand() {
    const showContent = document.getElementById(this.dataset.target);
    if (showContent.classList.contains('expand-active')) {
      this.innerHTML = this.dataset.showtext;
    } else {
      this.innerHTML = this.dataset.hidetext;
    }
    showContent.classList.toggle('expand-active');
  }

  expandsMore.forEach((expandMore) => {
    expandMore.addEventListener('click', expand);
  });

  let imageCount = 0;
  const imageIdList = [];
  const galleryMain = document.getElementById("gallery-main");
  const imageURLs = ["https://i.pinimg.com/564x/55/c2/98/55c298d350bbb4c95111ecadb23c688f.jpg",
   "https://i.pinimg.com/564x/60/66/ac/6066ac0b73d746a1f88cae47c6ad7b7a.jpg",
   "https://i.pinimg.com/564x/5c/07/9e/5c079e9b2d1ca4959334aeb916e0b78b.jpg",
   "https://i.pinimg.com/564x/12/98/c5/1298c597ebc4811d09cca0c3ffa0a7a6.jpg",
   "https://i.pinimg.com/564x/56/56/54/56565424f72a2936c5189049e3190e34.jpg",
   "https://i.pinimg.com/564x/f0/22/ab/f022ab4577cea807544d41fe2e07a9ba.jpg",
   "https://i.pinimg.com/564x/e6/a3/e0/e6a3e0d852c02fdede98d2cf8957f07f.jpg",
   "https://i.pinimg.com/564x/cd/72/fc/cd72fc404ff63cdc2edbde78f0802256.jpg"];
  const addButton = document.getElementById("add-button-container");

  function addDiv() {

    const randomNum = Math.floor(Math.random() * (imageURLs.length - 1) + 0.5);


    imageCount++;
    let newImage = document.createElement("div");
    newImage.classList.add("image-container");
    newImage.innerHTML = "<div class='gallery-image' id='i" + imageCount + "'></div>";
    // divElement.innerHTML = imageCount;
    newImage.firstChild.style.backgroundImage = "url('" + imageURLs[randomNum] + "')";
    newImage.firstChild.style.backgroundSize = "cover";
    newImage.id = imageCount;
    imageIdList.push(imageCount);
    galleryMain.insertBefore(newImage, addButton);

    // remove button
    let imageID = "i" + imageCount
    let removeButton = document.createElement("div");
    removeButton.classList.add("remove-button");
    removeButton.id = "remove-button" + imageCount;
    document.getElementById(imageID).appendChild(removeButton);
    removeButton.addEventListener('click', subtractDiv);

    // setTimeout(removeElement, 5000, newImage)
    setTimeout(() => {newImage.remove()}, 30000);
  }
  // function removeElement(e) {
  //   console.log("timer ran out");
  //   console.log(e);
  //   e.remove();
  // }



  function subtractDiv(event){
    console.log('Click event', event);
    event.target.parentElement.parentElement.remove();
  }

  document.getElementById("add-button").addEventListener('click', addDiv);

  // run once you received the API data

  let zip = document.getElementById("zip");
  let temperature = document.getElementById("temperature");
  let weatherDescription = document.getElementById("weather-description");


  function weatherUpdate(weatherData) {
    console.log(weatherData.currentConditions.temp);
    zip.innerText = weatherData.address;
    temperature.innerText = weatherData.currentConditions.temp + "°";
    weatherDescription.innerText = weatherData.description;

  }

}

document.addEventListener('DOMContentLoaded', doSomething);