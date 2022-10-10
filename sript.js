// let burger = document.querySelector(".burger");
// let selection = document.querySelector(".selection-header");
// let selectionList = document.querySelector(".item-box");
// let selectionBox = document.querySelector(".lattice-size-box");

// // Header burger open/closed
// burger.addEventListener("click", () => {
//   // list.classList.toggle('open')
//   burger.classList.toggle("open");
// });

// selection.addEventListener("click", openCloseModal);

// selectionList.addEventListener("click", setValue);

// function openCloseModal() {
//   selectionList.classList.toggle("item-box--open");
// }

// function setValue(e) {
//   if (e.target.classList.contains("selection-item")) {
//     let selectionValue = document.querySelector(".selection-value");
//     selectionValue.textContent = e.target.getAttribute("value");
//     selectionList.classList.toggle("item-box--open");
//   } else return;
// }

let box = document.querySelector('.lattice-size-box')
console.log(box);

box.addEventListener('click', ({target}) => {
	if(target.closest(".selection")) {
		let selection = target.closest(".selection");
		let itemBox = selection.querySelector('.item-box')

		itemBox.classList.toggle("item-box--open")
	}

	
})

