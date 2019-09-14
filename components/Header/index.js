// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    const headerDiv = document.createElement('div')
    const dateSpan = headerDiv.appendChild(document.createElement('span'))
    const titleH1 = headerDiv.appendChild(document.createElement('h1'))
    const tempSpan = headerDiv.appendChild(document.createElement('span'))

    headerDiv.classList.add('header')
    dateSpan.classList.add('date')
    dateSpan.textContent = "MARCH 28, 2019"
    titleH1.textContent="Lambda Times"
    tempSpan.classList.add('temp')
    tempSpan.textContent = "98°"

    return headerDiv
}

const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())

