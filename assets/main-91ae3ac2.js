(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",f);function f(){document.body.classList.add("ready")}(()=>{const s=document.querySelector("[data-modal-open]"),i=document.querySelector("[data-modal-close]"),r=document.querySelector("[data-modal]");s.addEventListener("click",o),i.addEventListener("click",o);function o(){r.classList.toggle("is-hidden")}})();const j=[{name:"Focuse Frame",technologies:"HTML, CSS, JS, Vite",descriptionUA:"Веб-сайт розроблений для школи фотографії з адаптивним дизайном, бургер-меню, модальним вікном, формами та анімаціями.<br>Роль: розробник мобільного модального вікна.",descriptionEN:"The website is created for photography school with responsive design, burger menu, modal window, forms and animations.<br>Role: developer of  mobile modal.",projectEN:"Team project",projectUA:"Командний проєкт",urlOfSite:"https://maxdemo1.github.io/project_First_Flight/",urlOfGithub:"https://github.com/maxdemo1/project_First_Flight",imageMobBig:"./img/team-projects/focus-frame-mob-2x.jpg",imageMobSmall:"./img/team-projects/focus-frame-mob-1x.jpg",imageTablDeskBig:"./img/team-projects/focus-frame-tabl-desk-2x.jpg",imageTablDeskSmall:"./img/team-projects/focus-frame-tabl-desk-1x.jpg"},{name:"Energy Flow",technologies:"HTML, CSS, JS, Vite",descriptionUA:"Веб-сайт розроблений для бажаючих мати гарну фізичну форму з адаптивним дизайном, мотивуючою цитатою дня, пошуком за ключовим словом, можливістю додати вправу до улюблених, модальними вікнами, формами та пагінацією.<br>Роль: розробник модального вікна вправи та частково модального вікна рейтингу.",descriptionEN:"The website is created for fitness enthusiasts with responsive design, motivational quote of the day, keyword search, option to add exercise to favorites, modal windows, forms and pagination.<br>Role: developer of exercise modal and partly of rating modal.",projectEN:"Team project",projectUA:"Командний проєкт",urlOfSite:"https://karolinataran.github.io/project-dev-hunters/",urlOfGithub:"https://github.com/KarolinaTaran/project-dev-hunters",imageMobBig:"./img/team-projects/energy-flow-mob-2x.jpg",imageMobSmall:"./img/team-projects/energy-flow-mob-1x.jpg",imageTablDeskBig:"./img/team-projects/energy-flow-tabl-desk-2x.jpg",imageTablDeskSmall:"./img/team-projects/energy-flow-tabl-desk-1x.jpg"}],v=[{name:"WebStudio",technologies:"HTML, JS, SCSS, SASS",descriptionUA:"Cайт розроблений для компанії  “WebStudio”. Адаптивний дизайн, ефекти трансформації, модальні вікна.",descriptionEN:"The site is created for the company `WebStudio`. Adaptive design, transformation effects, modal windows.",projectEN:"Individual project",projectUA:"Індивідуальний проєкт",urlOfSite:"https://molchanovaolga.github.io/GoIt-markup-hw-8-uk/",urlOfGithub:"https://github.com/MolchanovaOlga/GoIt-markup-hw-8-uk",imageMobBig:"./img/individual projects/web-studio-mob-2x.jpg",imageMobSmall:"./img/individual projects/web-studio-mob-1x.jpg",imageTablDeskBig:"./img/individual projects/web-studio-tabl-desk-2x.jpg",imageTablDeskSmall:"./img/individual projects/web-studio-tabl-desk-1x.jpg"},{name:"Timer",technologies:"HTML, CSS, JS, Vite",descriptionUA:"Застосунок розроблений для зворотного відліку часу до певної дати в майбутньому з використанням бібліотек Flatpickr та iziToast.",descriptionEN:"The application is created to count down the time to a certain date in the future using the Flatpickr and iziToast libraries.",projectEN:"Individual project",projectUA:"Індивідуальний проєкт",urlOfSite:"https://molchanovaolga.github.io/goit-js-hw-10/1-timer.html",urlOfGithub:"https://github.com/MolchanovaOlga/goit-js-hw-10/blob/main/src/js/1-timer.js",imageMobBig:"./img/individual projects/timer-mob-2x.jpg",imageMobSmall:"./img/individual projects/timer-mob-1x.jpg",imageTablDeskBig:"./img/individual projects/timer-tabl-desk-2x.jpg",imageTablDeskSmall:"./img/individual projects/timer-tabl-desk-1x.jpg"},{name:"Gallery",technologies:"HTML, CSS, JS, Vite",descriptionUA:"Застосунок пошуку зображень за ключовим словом і їх перегляду в галереї з плавним прокручуванням сторінки.  Використано бібліотеки  Axios,  iziToast, css-loader, SimpleLightbox та АРІ сервіс Pixabay.",descriptionEN:"The application is created for searching images by keyword and viewing them in a gallery with smooth page scrolling. The libraries Axios, iziToast, css-loader, SimpleLightbox and the API service of Pixabay were used.",projectEN:"Individual project",projectUA:"Індивідуальний проєкт",urlOfSite:"https://molchanovaolga.github.io/goit-js-hw-12/",urlOfGithub:"https://github.com/MolchanovaOlga/goit-js-hw-12",imageMobBig:"./img/individual projects/gallery-mob-2x.jpg",imageMobSmall:"./img/individual projects/gallery-mob-1x.jpg",imageTablDeskBig:"./img/individual projects/gallery-tabl-desk-2x.jpg",imageTablDeskSmall:"./img/individual projects/gallery-tabl-desk-1x.jpg"}],n=document.querySelector('input[value="team-projects"]'),d=document.querySelector('input[value="individual-projects"]'),l=document.querySelector(".portfolio-projects-list");n.addEventListener("click",S);d.addEventListener("click",y);function S(){m(),l.innerHTML="",p(j)}function y(){m(),l.innerHTML="",p(v)}function p(s){const i=s.reverse().map(({name:r,technologies:o,descriptionUA:e,projectUA:t,urlOfSite:a,urlOfGithub:g,imageMobBig:u,imageMobSmall:h,imageTablDeskBig:b,imageTablDeskSmall:c})=>`
    <li class="portfolio-projects-item">
    <div class="portfolio-projects-left-block">
      <a class="portfolio-projects-site-link" href="${a}" target="_blank">
      <div class="portfolio-projects-image-container">
        <picture>
          <source
          media="(max-width: 767px)"
          srcset="
          ${h} 1x,
          ${u} 2x
          "
          />
          <source
            media="(min-width: 768px)"
            srcset="
            ${c} 1x,
            ${b} 2x
            "
          />
          <img class="portfolio-projects-image" src="${c}" alt="${r} project" />
        </picture>
        <div class="image-blur">
        <p class="image-blur-text">Перейти на сайт</p>
        </div>
        </div>
      </a>
      <div class="projects-left-text-container">
        <a class="portfolio-projects-github-link" href="${g}" target="_blank">
          <svg class="portfolio-projects-github-icon" width="24" height="24">
            <use href="./img/sprite.svg#icon-github"></use>
          </svg>
        Переглянути код
        </a>
        <p class="portfolio-projects-filter-paragraf">${t}</p>
      </div>
    </div>
    <div class="portfolio-projects-right-block">
    <h3>${r}</h3>
    <p>${o}</p>
    <p>${e}</p>
    </div>
  </li>
    `).join("");l.insertAdjacentHTML("beforeend",i)}function m(){n.parentNode.classList.toggle("selected-radio-label"),d.parentNode.classList.toggle("selected-radio-label")}const x="/OMolchanova_Fullstack_Developer/assets/resume-d959ed0a.pdf";document.getElementById("link-pdf").href=x;
//# sourceMappingURL=main-91ae3ac2.js.map
