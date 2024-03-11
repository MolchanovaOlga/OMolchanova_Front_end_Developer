(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",j);function j(){document.body.classList.add("ready")}(()=>{const i=document.querySelector("[data-modal-open]"),t=document.querySelector("[data-modal-close]"),a=document.querySelector("[data-modal]");i.addEventListener("click",r),t.addEventListener("click",r);function r(){a.classList.toggle("is-hidden")}})();const y="/OMolchanova_Front_end_Developer/assets/energy-flow-mob-1x-54b92ec9.jpg",S="/OMolchanova_Front_end_Developer/assets/energy-flow-mob-2x-15d621cf.jpg",x="/OMolchanova_Front_end_Developer/assets/energy-flow-tabl-desk-1x-d6567727.jpg",w="/OMolchanova_Front_end_Developer/assets/energy-flow-tabl-desk-2x-5a896607.jpg",g=[{name:"Focuse Frame",technologies:"HTML, CSS, JS, Vite",descriptionUA:"Веб-сайт розроблений для школи фотографії з адаптивним дизайном, бургер-меню, модальним вікном, формами та анімаціями.<br>Роль: розробник мобільного модального вікна.",descriptionEN:"The website is created for photography school with responsive design, burger menu, modal window, forms and animations.<br>Role: developer of  mobile modal.",projectEN:"Team project",projectUA:"Командний проєкт",urlOfSite:"https://maxdemo1.github.io/project_First_Flight/",urlOfGithub:"https://github.com/MolchanovaOlga/First_Flight-team-project",imageMobBig:"focus-frame-mob-2x-ef49ac85",imageMobSmall:"focus-frame-mob-1x-cf4c5925",imageTablDeskBig:"focus-frame-tabl-desk-2x-0857f174",imageTablDeskSmall:"focus-frame-tabl-desk-1x-3ce77bfc"},{name:"Energy Flow",technologies:"HTML, CSS, JS, Vite",descriptionUA:"Веб-сайт розроблений для бажаючих мати гарну фізичну форму з адаптивним дизайном, мотивуючою цитатою дня, пошуком за ключовим словом, можливістю додати вправу до улюблених, модальними вікнами, формами та пагінацією.<br>Роль: розробник модального вікна вправи та частково модального вікна рейтингу.",descriptionEN:"The website is created for fitness enthusiasts with responsive design, motivational quote of the day, keyword search, option to add exercise to favorites, modal windows, forms and pagination.<br>Role: developer of exercise modal and partly of rating modal.",projectEN:"Team project",projectUA:"Командний проєкт",urlOfSite:"https://karolinataran.github.io/project-dev-hunters/",urlOfGithub:"https://github.com/MolchanovaOlga/dev-hunters-team-project-js",imageMobBig:`${S}`,imageMobSmall:`${y}`,imageTablDeskBig:`${w}`,imageTablDeskSmall:`${x}`}],m=[{name:"WebStudio",technologies:"HTML, JS, SCSS, SASS",descriptionUA:"Cайт розроблений для компанії  “WebStudio”. Адаптивний дизайн, ефекти трансформації, модальні вікна.",descriptionEN:"The site is created for the company `WebStudio`. Adaptive design, transformation effects, modal windows.",projectEN:"Individual project",projectUA:"Індивідуальний проєкт",urlOfSite:"https://molchanovaolga.github.io/GoIt-markup-hw-8-uk/",urlOfGithub:"https://github.com/MolchanovaOlga/GoIt-markup-hw-8-uk",imageMobBig:"web-studio-mob-2x-752ff49a",imageMobSmall:"web-studio-mob-1x-9d8366a2",imageTablDeskBig:"web-studio-tabl-desk-2x-03c54984",imageTablDeskSmall:"web-studio-tabl-desk-1x-5c1a151b"},{name:"Timer",technologies:"HTML, CSS, JS, Vite",descriptionUA:"Застосунок розроблений для зворотного відліку часу до певної дати в майбутньому з використанням бібліотек Flatpickr та iziToast.",descriptionEN:"The application is created to count down the time to a certain date in the future using the Flatpickr and iziToast libraries.",projectEN:"Individual project",projectUA:"Індивідуальний проєкт",urlOfSite:"https://molchanovaolga.github.io/goit-js-hw-10/1-timer.html",urlOfGithub:"https://github.com/MolchanovaOlga/goit-js-hw-10/blob/main/src/js/1-timer.js",imageMobBig:"timer-mob-2x-3ece2ce9",imageMobSmall:"timer-mob-1x",imageTablDeskBig:"timer-tabl-desk-2x-e67f03dd",imageTablDeskSmall:"timer-tabl-desk-1x"},{name:"Gallery",technologies:"HTML, CSS, JS, Vite",descriptionUA:"Застосунок пошуку зображень за ключовим словом і їх перегляду в галереї з плавним прокручуванням сторінки.  Використано бібліотеки  Axios,  iziToast, css-loader, SimpleLightbox та АРІ сервіс Pixabay.",descriptionEN:"The application is created for searching images by keyword and viewing them in a gallery with smooth page scrolling. The libraries Axios, iziToast, css-loader, SimpleLightbox and the API service of Pixabay were used.",projectEN:"Individual project",projectUA:"Індивідуальний проєкт",urlOfSite:"https://molchanovaolga.github.io/goit-js-hw-12/",urlOfGithub:"https://github.com/MolchanovaOlga/goit-js-hw-12",imageMobBig:"gallery-mob-2x-e4fd32aa",imageMobSmall:"gallery-mob-1x-ce6aebb1",imageTablDeskBig:"gallery-tabl-desk-2x-d0525264",imageTablDeskSmall:"gallery-tabl-desk-1x-dc815428"}],s=document.querySelector('input[value="team-projects"]'),l=document.querySelector('input[value="individual-projects"]'),p=document.querySelector(".portfolio-projects-list");try{s.parentNode.classList.contains("selected-radio-label")&&(n(g),l.disabled=!1,s.disabled=!0),l.classList.contains("selected-radio-label")&&(n(m),s.disabled=!1,l.disabled=!0),s.addEventListener("click",M),l.addEventListener("click",k)}catch(i){console.log(i)}async function M(){u(),p.innerHTML="",n(g),l.disabled=!1,s.disabled=!0}async function k(){u(),p.innerHTML="",n(m),s.disabled=!1,l.disabled=!0}function n(i){const t=i.reverse().map(({name:a,technologies:r,descriptionUA:e,projectUA:o,urlOfSite:c,urlOfGithub:f,imageMobBig:b,imageMobSmall:h,imageTablDeskBig:v,imageTablDeskSmall:d})=>(console.log(d),`
    <li class="portfolio-projects-item">
    <div class="portfolio-projects-left-block">
      <a class="portfolio-projects-site-link" href="${c}" target="_blank">
      <div class="portfolio-projects-image-container">
        <picture>
          <source
          media="(max-width: 767px)"
          srcset="
          ${h} 1x,
          ${b} 2x
          "
          />
          <source
            media="(min-width: 768px)"
            srcset="
            ${d} 1x,
            ${v} 2x
            "
          />
          <img class="portfolio-projects-image" src="${d}" alt="${a} project" />
        </picture>
        <div class="image-blur">
        <p class="image-blur-text">Перейти на сайт</p>
        </div>
        </div>
      </a>
      <div class="projects-left-text-container">
        <a class="portfolio-projects-github-link" href="${f}" target="_blank">
          <svg class="portfolio-projects-github-icon" width="24" height="24">
            <use href="/OMolchanova_Front_end_Developer/assets/sprite-0f33a940.svg#icon-github"></use>
          </svg>
        Переглянути код
        </a>
        <p class="portfolio-projects-filter-paragraf">${o}</p>
      </div>
    </div>
    <div class="portfolio-projects-right-block">
    <h3 class="portfolio-project-title">${a}</h3>
    <p class="portfolio-project-technologies">${r}</p>
    <div class="portfolio-project-description-container" id="scrollTry">
      <p class="portfolio-project-description">${e}</p>
    </div>
    </div>
  </li>
    `)).join("");p.insertAdjacentHTML("beforeend",t),i.reverse(),T()}function T(){document.querySelectorAll(".portfolio-project-description-container").forEach(t=>{t.querySelector(".portfolio-project-description").clientHeight>t.clientHeight&&t.classList.add("scroll-on")})}function u(){s.parentNode.classList.toggle("selected-radio-label"),l.parentNode.classList.toggle("selected-radio-label")}const L="/OMolchanova_Front_end_Developer/assets/Olga_Molchanova_Front_end_Developer-9179e2c7.pdf";document.getElementById("link-pdf").href=L;
//# sourceMappingURL=main-c3840cb0.js.map
