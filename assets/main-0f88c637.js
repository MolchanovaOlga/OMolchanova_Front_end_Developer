(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",S);function S(){document.body.classList.add("ready")}(()=>{const i=document.querySelector("[data-modal-open]"),o=document.querySelector("[data-modal-close]"),l=document.querySelector("[data-modal]");i.addEventListener("click",a),o.addEventListener("click",a);function a(){l.classList.toggle("is-hidden")}})();const g=[{name:"Focuse Frame",technologies:"HTML, CSS, JS, Vite",descriptionUA:"Веб-сайт розроблений для школи фотографії з адаптивним дизайном, бургер-меню, модальним вікном, формами та анімаціями.<br>Роль: розробник мобільного модального вікна.",descriptionEN:"The website is created for photography school with responsive design, burger menu, modal window, forms and animations.<br>Role: developer of  mobile modal.",projectEN:"Team project",projectUA:"Командний проєкт",urlOfSite:"https://maxdemo1.github.io/project_First_Flight/",urlOfGithub:"https://github.com/maxdemo1/project_First_Flight",imageMobBig:"/img/team-projects/focus-frame-mob-2x",imageMobSmall:"/img/team-projects/focus-frame-mob-1x",imageTablDeskBig:"/img/team-projects/focus-frame-tabl-desk-2x",imageTablDeskSmall:"/img/team-projects/focus-frame-tabl-desk-1x"},{name:"Energy Flow",technologies:"HTML, CSS, JS, Vite",descriptionUA:"Веб-сайт розроблений для бажаючих мати гарну фізичну форму з адаптивним дизайном, мотивуючою цитатою дня, пошуком за ключовим словом, можливістю додати вправу до улюблених, модальними вікнами, формами та пагінацією.<br>Роль: розробник модального вікна вправи та частково модального вікна рейтингу.",descriptionEN:"The website is created for fitness enthusiasts with responsive design, motivational quote of the day, keyword search, option to add exercise to favorites, modal windows, forms and pagination.<br>Role: developer of exercise modal and partly of rating modal.",projectEN:"Team project",projectUA:"Командний проєкт",urlOfSite:"https://karolinataran.github.io/project-dev-hunters/",urlOfGithub:"https://github.com/KarolinaTaran/project-dev-hunters",imageMobBig:"./img/team-projects/energy-flow-mob-2x.jpg",imageMobSmall:"./img/team-projects/energy-flow-mob-1x.jpg",imageTablDeskBig:"./img/team-projects/energy-flow-tabl-desk-2x.jpg",imageTablDeskSmall:"./img/team-projects/energy-flow-tabl-desk-1x.jpg"}],m=[{name:"WebStudio",technologies:"HTML, JS, SCSS, SASS",descriptionUA:"Cайт розроблений для компанії  “WebStudio”. Адаптивний дизайн, ефекти трансформації, модальні вікна.",descriptionEN:"The site is created for the company `WebStudio`. Adaptive design, transformation effects, modal windows.",projectEN:"Individual project",projectUA:"Індивідуальний проєкт",urlOfSite:"https://molchanovaolga.github.io/GoIt-markup-hw-8-uk/",urlOfGithub:"https://github.com/MolchanovaOlga/GoIt-markup-hw-8-uk",imageMobBig:"./img/individual projects/web-studio-mob-2x.jpg",imageMobSmall:"./img/individual projects/web-studio-mob-1x.jpg",imageTablDeskBig:"./img/individual projects/web-studio-tabl-desk-2x.jpg",imageTablDeskSmall:"./img/individual projects/web-studio-tabl-desk-1x.jpg"},{name:"Timer",technologies:"HTML, CSS, JS, Vite",descriptionUA:"Застосунок розроблений для зворотного відліку часу до певної дати в майбутньому з використанням бібліотек Flatpickr та iziToast.",descriptionEN:"The application is created to count down the time to a certain date in the future using the Flatpickr and iziToast libraries.",projectEN:"Individual project",projectUA:"Індивідуальний проєкт",urlOfSite:"https://molchanovaolga.github.io/goit-js-hw-10/1-timer.html",urlOfGithub:"https://github.com/MolchanovaOlga/goit-js-hw-10/blob/main/src/js/1-timer.js",imageMobBig:"./img/individual projects/timer-mob-2x.jpg",imageMobSmall:"./img/individual projects/timer-mob-1x.jpg",imageTablDeskBig:"./img/individual projects/timer-tabl-desk-2x.jpg",imageTablDeskSmall:"./img/individual projects/timer-tabl-desk-1x.jpg"},{name:"Gallery",technologies:"HTML, CSS, JS, Vite",descriptionUA:"Застосунок пошуку зображень за ключовим словом і їх перегляду в галереї з плавним прокручуванням сторінки.  Використано бібліотеки  Axios,  iziToast, css-loader, SimpleLightbox та АРІ сервіс Pixabay.",descriptionEN:"The application is created for searching images by keyword and viewing them in a gallery with smooth page scrolling. The libraries Axios, iziToast, css-loader, SimpleLightbox and the API service of Pixabay were used.",projectEN:"Individual project",projectUA:"Індивідуальний проєкт",urlOfSite:"https://molchanovaolga.github.io/goit-js-hw-12/",urlOfGithub:"https://github.com/MolchanovaOlga/goit-js-hw-12",imageMobBig:"./img/individual projects/gallery-mob-2x.jpg",imageMobSmall:"./img/individual projects/gallery-mob-1x.jpg",imageTablDeskBig:"./img/individual projects/gallery-tabl-desk-2x.jpg",imageTablDeskSmall:"./img/individual projects/gallery-tabl-desk-1x.jpg"}],s=document.querySelector('input[value="team-projects"]'),r=document.querySelector('input[value="individual-projects"]'),d=document.querySelector(".portfolio-projects-list");try{s.parentNode.classList.contains("selected-radio-label")&&(n(g),r.disabled=!1,s.disabled=!0),r.classList.contains("selected-radio-label")&&(n(m),s.disabled=!1,r.disabled=!0),s.addEventListener("click",y),r.addEventListener("click",x)}catch(i){console.log(i)}function y(){u(),d.innerHTML="",n(g),r.disabled=!1,s.disabled=!0}function x(){u(),d.innerHTML="",n(m),s.disabled=!1,r.disabled=!0}function n(i){const o=i.reverse().map(({name:a,technologies:e,descriptionUA:t,projectUA:c,urlOfSite:f,urlOfGithub:h,imageMobBig:b,imageMobSmall:j,imageTablDeskBig:v,imageTablDeskSmall:p})=>`
    <li class="portfolio-projects-item">
    <div class="portfolio-projects-left-block">
      <a class="portfolio-projects-site-link" href="${f}" target="_blank">
      <div class="portfolio-projects-image-container">
        <picture>
          <source
          media="(max-width: 767px)"
          srcset="
          /OMolchanova_Fullstack_Developer/assets${j}-8a4f488d.jpg 1x,
          /OMolchanova_Fullstack_Developer/assets${b}-8a4f488d.jpg 2x
          "
          />
          <source
            media="(min-width: 768px)"
            srcset="
            /OMolchanova_Fullstack_Developer/assets${p}-8a4f488d.jpg 1x,
            /OMolchanova_Fullstack_Developer/assets${v}-8a4f488d.jpg 2x
            "
          />
          <img class="portfolio-projects-image" src="/OMolchanova_Fullstack_Developer/assets${p}-8a4f488d.jpg" alt="${a} project" />
        </picture>
        <div class="image-blur">
        <p class="image-blur-text">Перейти на сайт</p>
        </div>
        </div>
      </a>
      <div class="projects-left-text-container">
        <a class="portfolio-projects-github-link" href="${h}" target="_blank">
          <svg class="portfolio-projects-github-icon" width="24" height="24">
            <use href="./img/sprite.svg#icon-github"></use>
          </svg>
        Переглянути код
        </a>
        <p class="portfolio-projects-filter-paragraf">${c}</p>
      </div>
    </div>
    <div class="portfolio-projects-right-block">
    <h3 class="portfolio-project-title">${a}</h3>
    <p class="portfolio-project-technologies">${e}</p>
    <div class="portfolio-project-description-container" id="scrollTry">
      <p class="portfolio-project-description">${t}</p>
    </div>
    </div>
  </li>
    `).join("");d.insertAdjacentHTML("beforeend",o),i.reverse(),k();const l=document.querySelectorAll("picture");console.log(l)}function k(){document.querySelectorAll(".portfolio-project-description-container").forEach(o=>{o.querySelector(".portfolio-project-description").clientHeight>o.clientHeight&&o.classList.add("scroll-on")})}function u(){s.parentNode.classList.toggle("selected-radio-label"),r.parentNode.classList.toggle("selected-radio-label")}const w="/OMolchanova_Fullstack_Developer/assets/Olga_Molchanova_FullStack_Developer-14284dd6.pdf";document.getElementById("link-pdf").href=w;
//# sourceMappingURL=main-0f88c637.js.map
