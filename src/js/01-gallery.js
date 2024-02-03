import { galleryItems } from './gallery-items.js';
// Change code below this line

// Import the galleryItems array from gallery-items.js
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const galleryList = document.querySelector('.gallery');

// Function to create and append a gallery item
function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = item.source;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.setAttribute('data-source', item.source);

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

// Function to render the gallery
function renderGallery() {
  const galleryFragment = document.createDocumentFragment();

  // Iterate through each item in the galleryItems array and create a gallery item for it
  galleryItems.forEach(item => {
    const galleryItem = createGalleryItem(item);
    galleryFragment.appendChild(galleryItem);
  });

  // Append the gallery items to the galleryList
  galleryList.appendChild(galleryFragment);
}

// Function to open the modal
function openModal(original) {
  const modalContent = document.createElement('div');
  modalContent.innerHTML = `<img src="${original}" alt="Large Image" class="modal-image">`;

  const modal = basicLightbox.create(modalContent, {
    onShow: (instance) => {
      const modalImage = instance.element().querySelector('.modal-image');
      modalImage.src = original;
    },
  });

  modal.show();

  document.addEventListener('keydown', closeModalOnEscape);

  function closeModalOnEscape(event) {
    if (event.key === 'Escape') {
      modal.close();
      document.removeEventListener('keydown', closeModalOnEscape);
    }
  }
}

// Event listener to handle clicks on gallery items
galleryList.addEventListener('click', handleGalleryClick);

// Function to handle the click event on gallery items
function handleGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const original = event.target.dataset.source;
  openModal(original);
}

// Call the renderGallery function to initialize the gallery
renderGallery();
