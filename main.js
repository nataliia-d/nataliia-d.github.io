function doSomething() {
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

  var imageCount = 0;
  let imageIdList = [];

  function addDiv() {
    imageCount++;
    var divElement = document.createElement("div");
    divElement.classList.add("image-container");
    divElement.innerHTML = "<div class='gallery-image'></div>";
    // divElement.innerHTML = imageCount;
    divElement.id = imageCount;
    imageIdList.push(imageCount);
    console.log(imageIdList);
    document.getElementById("gallery-main").appendChild(divElement);
  }

  function subtractDiv(){
    var firstImageID = (imageIdList[0]);
    var firstImage = (document.getElementById(firstImageID));
    firstImage.parentNode.removeChild(firstImage);
    imageIdList.shift();
    console.log(firstImage);
  }

  document.getElementById("add-button").addEventListener('click', addDiv);
  document.getElementById("subtract-button").addEventListener('click', subtractDiv);


}

document.addEventListener('DOMContentLoaded', doSomething);