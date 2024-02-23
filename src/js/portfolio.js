import { teamProject, individualProject } from './data';

//const form = document.querySelector('.portfolio-radio-form');
const teamProjectBtn = document.querySelector('input[value="team-projects"]');
const individualProjectBtn = document.querySelector(
  'input[value="individual-projects"]'
);
const projectList = document.querySelector('.portfolio-projects-list');

//teamProjectBtn.addEventListener('click', loadTeamProjects);
//individualProjectBtn.addEventListener('click', loadIndividualProjects);

function loadTeamProjects() {
  toggleRadioBtns();
  projectList.innerHTML = '';
  drawProjectsList(teamProject);
}

function loadIndividualProjects() {
  toggleRadioBtns();
  projectList.innerHTML = '';
  drawProjectsList(individualProject);
}

function drawProjectsList(arr) {
  const projectsItem = arr
    .reverse()
    .map(
      ({
        name,
        technologies,
        descriptionUA,
        projectUA,
        urlOfSite,
        urlOfGithub,
        imageMobBig,
        imageMobSmall,
        imageTablDeskBig,
        imageTablDeskSmall,
      }) => {
        return `
    <li class="portfolio-projects-item">
    <div class="portfolio-projects-left-block">
      <a class="portfolio-projects-site-link" href="${urlOfSite}" target="_blank">
      <div class="portfolio-projects-image-container">
        <picture>
          <source
          media="(max-width: 767px)"
          srcset="
          ${imageMobSmall} 1x,
          ${imageMobBig} 2x
          "
          />
          <source
            media="(min-width: 768px)"
            srcset="
            ${imageTablDeskSmall} 1x,
            ${imageTablDeskBig} 2x
            "
          />
          <img class="portfolio-projects-image" src="${imageTablDeskSmall}" alt="${name} project" />
        </picture>
        <div class="image-blur">
        <p class="image-blur-text">Перейти на сайт</p>
        </div>
        </div>
      </a>
      <div class="projects-left-text-container">
        <a class="portfolio-projects-github-link" href="${urlOfGithub}" target="_blank">
          <svg class="portfolio-projects-github-icon" width="24" height="24">
            <use href="./img/sprite.svg#icon-github"></use>
          </svg>
        Переглянути код
        </a>
        <p class="portfolio-projects-filter-paragraf">${projectUA}</p>
      </div>
    </div>
    <div class="portfolio-projects-right-block">
    <h3>${name}</h3>
    <p>${technologies}</p>
    <p>${descriptionUA}</p>
    </div>
  </li>
    `;
      }
    )
    .join('');

  projectList.insertAdjacentHTML('beforeend', projectsItem);
}

function toggleRadioBtns() {
  teamProjectBtn.parentNode.classList.toggle('selected-radio-label');
  individualProjectBtn.parentNode.classList.toggle('selected-radio-label');
}
