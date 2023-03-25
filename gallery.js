const galleryMain = document.getElementById("gallery-main");
const imageURLs = ["https://i.pinimg.com/564x/55/c2/98/55c298d350bbb4c95111ecadb23c688f.jpg",
"https://i.pinimg.com/564x/60/66/ac/6066ac0b73d746a1f88cae47c6ad7b7a.jpg",
"https://i.pinimg.com/564x/5c/07/9e/5c079e9b2d1ca4959334aeb916e0b78b.jpg",
"https://i.pinimg.com/564x/12/98/c5/1298c597ebc4811d09cca0c3ffa0a7a6.jpg",
"https://i.pinimg.com/564x/56/56/54/56565424f72a2936c5189049e3190e34.jpg",
"https://i.pinimg.com/564x/f0/22/ab/f022ab4577cea807544d41fe2e07a9ba.jpg",
"https://i.pinimg.com/564x/e6/a3/e0/e6a3e0d852c02fdede98d2cf8957f07f.jpg",
"https://i.pinimg.com/564x/cd/72/fc/cd72fc404ff63cdc2edbde78f0802256.jpg"];

export const addButton = document.getElementById("add-button-container");

export function gallery() {
    let imageCount = 0;


    function createImageDiv() {

        const randomNum = Math.floor(Math.random() * (imageURLs.length - 1) + 0.5);
        imageCount++;

        const newImage = document.createElement("div");
        newImage.classList.add("image-container");
        newImage.innerHTML = `<div class="gallery-image" id="i${imageCount}"></div>`;
        newImage.firstChild.style.backgroundImage = `url('${imageURLs[randomNum]}')`;
        newImage.firstChild.style.backgroundSize = "cover";
        newImage.id = imageCount;
        galleryMain.insertBefore(newImage, addButton);

        createRemoveButton(newImage);
        setTimeout(() => {newImage.remove()}, 30000);
    }

    function createRemoveButton(parent) {
        let removeButton = document.createElement("div");
        removeButton.classList.add("remove-button");
        removeButton.id = "remove-button" + imageCount;
        parent.querySelector(".gallery-image").appendChild(removeButton);
        removeButton.addEventListener("click",removeImageDiv);
    }

    function removeImageDiv(event){
        console.log('Click event', event);
        event.target.parentElement.parentElement.remove();
    }

    document.getElementById("add-button").addEventListener('click', createImageDiv);
}