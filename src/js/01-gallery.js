// Add imports above this line
import { galleryItems } from './gallery-items';

// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.gallery');   


const createGalleryItems = galleryItems.map((galleryItem)=> 
    `
         <a class="gallery__item" href="${galleryItem.original}">
              <img
              class="gallery__image"
              src="${galleryItem.preview}" 
              alt="${galleryItem.description}"
              data-source="${galleryItem.original}"
        />
       </a>
   `
).join('');

gallery.insertAdjacentHTML("beforeend", createGalleryItems);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });

gallery.addEventListener('click', onImgClick);

function onImgClick(event) {
    event.preventDefault();
    // console.log(event.target);
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
}
// Change code below this line

// console.log(galleryItems);
