import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

galleryItems.forEach((item) => {
  console.log(item)
  let li = `
  <li class="gallery__item">
      <a class="gallery__link" href="javascript:void(0)">
        <img 
          class="gallery__image" 
          src="${item.preview}" 
          data-source="${item.original}" 
          alt="${item.description}"   
        />
      </a>
    </li>
    `;
  gallery.innerHTML += li;
});

//Event Delegation 1-old
gallery.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    let bigImage = e.target.getAttribute("data-source");
    let instance = basicLightbox.create(`<img src="${bigImage}" width="800" height="600" />`);
    instance.show();
  }
});

function createGalleryItem(array) {
  array.map(({ preview, original, description }) => {
      return `
          <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
          </a>
      `;
   })
    .join("");
}

const photosMarkup = createGalleryItem(galleryItems);
gallery.insertAdjacentHTML("beforeend", photosMarkup);

// Initialize SimpleLightbox with options
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});


// const gallery = document.querySelector("ul.gallery");

// function createGalleryItem(array) {
//   array.map(({ preview, original, description }) => {
//       return `
//           <a class="gallery__item" href="${original}">
//             <img class="gallery__image" src="${preview}" alt="${description}"/>
//           </a>
//       `;
//    })
//     .join("");
// }

// const photosMarkup = createGalleryItem(galleryItems);
// gallery.insertAdjacentHTML("beforeend", photosMarkup);

// // Initialize SimpleLightbox
// import SimpleLightbox from 'simplelightbox';


// //Adding image caption display from the alt attribute
// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });



// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const galleryList = document.querySelector('ul.gallery');

// function createGalleryItem(item) {
//   const galleryItem = document.createElement('li');
//   galleryItem.classList.add('gallery__item');

//   const galleryLink = document.createElement('a');
//   galleryLink.classList.add('gallery__link');
//   galleryLink.href = "${original}";

//   const galleryImage = document.createElement('img');
//   galleryImage.classList.add('gallery__image');
//   galleryImage.src = "${preview}";
//   galleryImage.alt = "${description}";

//   galleryLink.appendChild(galleryImage);
//   galleryItem.appendChild(galleryLink);

//   return galleryItem;
// }

// function renderGallery() {
//   const galleryFragment = document.createDocumentFragment();

//   galleryItems.forEach(item => {
//     const galleryItem = createGalleryItem(item);
//     galleryFragment.appendChild(galleryItem);
//   });

//   galleryList.appendChild(galleryFragment);

//   // Initialize SimpleLightbox
//   const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
// }

// renderGallery();
