import './js/load-page.js';
import './js/menu.js';
import './js/portfolio.js';

// --------------------- attachment of pdf-file to menu-resume ---------------------

import pdfUrl from './public/files/Olga_Molchanova_FullStack_Developer.pdf';
document.getElementById('link-pdf').href = pdfUrl;

// --------------------- urls of jpg-file to data.js ---------------------

// import { teamProject, individualProject } from './js/data.js';
// import { teamImgsUrl, individualImgsUrl } from './js/dataOfImgsUrl.js';

// teamProject.forEach(obj => {
//   teamImgsUrl.forEach(
//     ({
//       imageMobBigUrl,
//       imageMobSmallUrl,
//       imageTablDeskBigUrl,
//       imageTablDeskSmallUrl,
//     }) => {
//       obj.imageMobBig = `./public${imageMobBigUrl}`;
//       obj.imageMobSmall = `./public${imageMobSmallUrl}`;
//       obj.imageTablDeskBig = `./public${imageTablDeskBigUrl}`;
//       obj.imageTablDeskSmall = `./public${imageTablDeskSmallUrl}`;
//     }
//   );
// });

// individualProject.forEach(obj => {
//   individualImgsUrl.forEach(
//     ({
//       imageMobBigUrl,
//       imageMobSmallUrl,
//       imageTablDeskBigUrl,
//       imageTablDeskSmallUrl,
//     }) => {
//       obj.imageMobBig = `./public${imageMobBigUrl}`;
//       obj.imageMobSmall = `./public${imageMobSmallUrl}`;
//       obj.imageTablDeskBig = `./public${imageTablDeskBigUrl}`;
//       obj.imageTablDeskSmall = `./public${imageTablDeskSmallUrl}`;
//     }
//   );
// });

// console.log(teamProject);
// console.log(individualProject);
