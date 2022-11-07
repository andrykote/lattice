let burger = document.querySelector(".burger");
let header = document.querySelector(".modal");
let box = document.querySelector(".lattice-size-box");
let amontBox = document.querySelector(".amount");
let colorBox = document.querySelector(".lettice-color-section");
let colorArr = document.querySelectorAll(".lattice-color");
let imgContainer = document.querySelector(".lattice-img-box");

// Burger
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  header.classList.toggle("modal-open");
  document.body.classList.toggle('noscroll')
});

// Selection Size
box?.addEventListener("click", ({ target }) => {
  if (target.closest(".selection")) {
    let selection = target.closest(".selection");
    let itemBox = selection.querySelector(".item-box");

    itemBox.classList.toggle("item-box--open");
    itemBox.addEventListener("click", setItemValue);
  }
});

//Amount Plus Minus
amontBox?.addEventListener("click", ({ target }) => {
  let valueBox = document.querySelector(".count-value");
  let value = valueBox.getAttribute("value");

  if (target.closest(".count-plus")) {
    value++;
    valueBox.setAttribute("value", value);
    valueBox.textContent = value;
  } else if (target.closest(".count-minus") && value > 1) {
    value--;
    valueBox.setAttribute("value", value);
    valueBox.textContent = value;
  }
});

//Checked Color
colorBox?.addEventListener("click", ({ target }) => {
  if (target.closest(".lattice-color")) {
    Array.from(colorBox.children).forEach((item) => (item.textContent = ""));

    if (target.closest(".white")) {
      target.innerHTML = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5835 11.9167L8.25016 15.5833L17.4168 6.41666" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `;
    } else {
      target.innerHTML = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5835 11.9167L8.25016 15.5833L17.4168 6.41666" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      `;
    }
  }
});

// Set Big Image
imgContainer?.addEventListener("click", ({ target }) => {
  let bigImg = imgContainer.querySelector(".lattice-base-img");
  let lattiseLittleImages = document.querySelectorAll(".lattice-little-img");


  lattiseLittleImages.forEach(image => image.classList.remove('active-border'))
  
  if (target.closest(".lattice-little-img")) {
    bigImg.setAttribute("src", target.getAttribute("data-img"));
    target.classList.add('active-border')
  }
});

function setItemValue({ target }) {
  if (target.classList.contains("selection-item")) {
    let selectionValue = target
      .closest(".selection")
      .querySelector(".selection-value");
    selectionValue.textContent = target.getAttribute("value");
  }
}
