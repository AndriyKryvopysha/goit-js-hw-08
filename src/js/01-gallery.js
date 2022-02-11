// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
console.log(galleryItems);
import minCss from "simplelightbox/dist/simple-lightbox.min.css";
import '../css/common.css';
import '../css/01-gallery.css';

const galleryEl = document.querySelector('.gallery');

galleryItems.forEach(picture => {
    
    const linkEL = document.createElement('a');
    linkEL.classList.add('gallery__item');
  linkEL.href = picture.original;
 

    const imageEL = document.createElement('img');
    imageEL.classList.add('gallery__image');
    imageEL.src = picture.preview;
    imageEL.alt = picture.description;

    linkEL.append(imageEL);

    galleryEl.append(linkEL)

})
let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });