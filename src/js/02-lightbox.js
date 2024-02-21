import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryList = document.querySelector('ul.gallery');

function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = "${original}";

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = "${preview}";
  galleryImage.alt = "${description}";

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

function renderGallery() {
  const galleryFragment = document.createDocumentFragment();

  galleryItems.forEach(item => {
    const galleryItem = createGalleryItem(item);
    galleryFragment.appendChild(galleryItem);
  });

  galleryList.appendChild(galleryFragment);

  // Initialize SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
}

renderGallery();
