import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
//Создание разметки элемента галлереи
const images = galleryItems.map((item) => {
  const imgItem = document.createElement("div");
  imgItem.classList.add("gallery__item");
  const anchor = document.createElement("a");
  anchor.classList.add("gallery__link");
  anchor.href = item.original;
  const img = document.createElement("img");
  img.classList.add("gallery__image");
  img.src = item.preview;
  img.alt = item.description;
  img.dataset.source = item.original;
  anchor.append(img);
  imgItem.append(anchor);
  return imgItem;
});
// console.log(images);
gallery.append(...images);

gallery.addEventListener("click", onImgClick, false);

function onImgClick(e) {
  // отменяем стандартное действие браузера
  e.preventDefault();
  console.log("Target - ", e.target.dataset.source);
  const instance = basicLightbox.create(
    `
	 		<img width="1400" height="900" src="${e.target.dataset.source}">
	  	`
  );
  instance.show();
}

// document.querySelector("button.image").onclick = () => {
//   basicLightbox
//     .create(
//       `
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`
//     )
//     .show();
// };
