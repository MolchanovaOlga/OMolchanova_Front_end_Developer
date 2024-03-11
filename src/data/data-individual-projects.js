// ---------------------------------------- Ways to individual projects images ----------------------------------------

import galleryMob1 from '../assets/img/individual-projects/gallery-mob-1x.jpg';
import galleryMob2 from '../assets/img/individual-projects/gallery-mob-2x.jpg';
import galleryTablDesk1 from '../assets/img/individual-projects/gallery-tabl-desk-1x.jpg';
import galleryTablDesk2 from '../assets/img/individual-projects/gallery-tabl-desk-2x.jpg';

import timerMob1 from '../assets/img/individual-projects/timer-mob-1x.jpg';
import timerMob2 from '../assets/img/individual-projects/timer-mob-2x.jpg';
import timerTablDesk1 from '../assets/img/individual-projects/timer-tabl-desk-1x.jpg';
import timerTablDesk2 from '../assets/img/individual-projects/timer-tabl-desk-2x.jpg';

import webStudioMob1 from '../assets/img/individual-projects/web-studio-mob-1x.jpg';
import webStudioMob2 from '../assets/img/individual-projects/web-studio-mob-2x.jpg';
import webStudioTablDesk1 from '../assets/img/individual-projects/web-studio-tabl-desk-1x.jpg';
import webStudioTablDesk2 from '../assets/img/individual-projects/web-studio-tabl-desk-2x.jpg';

// ---------------------------------------- Arrays of individual projects data ----------------------------------------

const individualProjects = [
  {
    name: 'Gallery',
    technologies: 'HTML, CSS, JS, Vite',
    descriptionUA:
      'Застосунок пошуку зображень за ключовим словом і їх перегляду в галереї з плавним прокручуванням сторінки.  Використано бібліотеки  Axios,  iziToast, css-loader, SimpleLightbox та АРІ сервіс Pixabay.',
    descriptionEN:
      'The application is created for searching images by keyword and viewing them in a gallery with smooth page scrolling. The libraries Axios, iziToast, css-loader, SimpleLightbox and the API service of Pixabay were used.',
    projectEN: 'Individual project',
    projectUA: 'Індивідуальний проєкт',
    urlOfSite: 'https://molchanovaolga.github.io/goit-js-hw-12/',
    urlOfGithub: 'https://github.com/MolchanovaOlga/goit-js-hw-12',
    imageMobBig: `${galleryMob2}`,
    imageMobSmall: `${galleryMob1}`,
    imageTablDeskBig: `${galleryTablDesk2}`,
    imageTablDeskSmall: `${galleryTablDesk1}`,
  },
  {
    name: 'Timer',
    technologies: 'HTML, CSS, JS, Vite',
    descriptionUA:
      'Застосунок розроблений для зворотного відліку часу до певної дати в майбутньому з використанням бібліотек Flatpickr та iziToast.',
    descriptionEN:
      'The application is created to count down the time to a certain date in the future using the Flatpickr and iziToast libraries.',
    projectEN: 'Individual project',
    projectUA: 'Індивідуальний проєкт',
    urlOfSite: 'https://molchanovaolga.github.io/goit-js-hw-10/1-timer.html',
    urlOfGithub:
      'https://github.com/MolchanovaOlga/goit-js-hw-10/blob/main/src/js/1-timer.js',
    imageMobBig: `${timerMob2}`,
    imageMobSmall: `${timerMob1}`,
    imageTablDeskBig: `${timerTablDesk2}`,
    imageTablDeskSmall: `${timerTablDesk1}`,
  },
  {
    name: 'WebStudio',
    technologies: 'HTML, JS, SCSS, SASS',
    descriptionUA:
      'Cайт розроблений для компанії  “WebStudio”. Адаптивний дизайн, ефекти трансформації, модальні вікна.',
    descriptionEN:
      'The site is created for the company `WebStudio`. Adaptive design, transformation effects, modal windows.',
    projectEN: 'Individual project',
    projectUA: 'Індивідуальний проєкт',
    urlOfSite: 'https://molchanovaolga.github.io/GoIt-markup-hw-8-uk/',
    urlOfGithub: 'https://github.com/MolchanovaOlga/GoIt-markup-hw-8-uk',
    imageMobBig: `${webStudioMob2}`,
    imageMobSmall: `${webStudioMob1}`,
    imageTablDeskBig: `${webStudioTablDesk2}`,
    imageTablDeskSmall: `${webStudioTablDesk1}`,
  },
];

export { individualProjects };
