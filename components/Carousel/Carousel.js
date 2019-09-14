/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function Carousel() {
  const topDiv = document.createElement('div')
  const leftButton = topDiv.appendChild(document.createElement('div'))

  //images in between
  const image1 = topDiv.appendChild(document.createElement('img'))
  image1.src = "./assets/carousel/mountains.jpeg"
  image1.style.display = "block"

  const image2 = topDiv.appendChild(document.createElement('img'))
  image2.src = "./assets/carousel/computer.jpeg"

  const image3 = topDiv.appendChild(document.createElement('img'))
  image3.src = "./assets/carousel/trees.jpeg"

  const image4 = topDiv.appendChild(document.createElement('img'))
  image4.src = "./assets/carousel/turntable.jpeg"

  const rightButton = topDiv.appendChild(document.createElement('div'))

  topDiv.classList.add('carousel')
  leftButton.classList.add('left-button')
  rightButton.classList.add('right-button')

  let currIndex = 0;
  const photoArray = [image1, image2, image3, image4]

  leftButton.addEventListener('click', e=> {
    currIndex===3 ? currIndex = 0 : currIndex+=1
    photoArray.forEach((photo,ind) => {
      (ind === currIndex) 
        ? photo.style.display = "block" 
        : photo.style.display = "none"
    })
  })

  rightButton.addEventListener('click', e=> {
    currIndex===0 ? currIndex = 3 : currIndex-=1
    photoArray.forEach((photo,ind) => {
      (ind === currIndex) 
        ? photo.style.display = "block" 
        : photo.style.display = "none"
    })
  })

  return topDiv
}

const insertCarousel = document.querySelector('.carousel-container')
insertCarousel.appendChild(Carousel())