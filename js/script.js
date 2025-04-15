import { getOffersData } from "./offersData.js";
import { getHowWeChooseData } from "./howWeChooseData.js";
import { getSecurityData } from "./securityData.js";

const renderOffers = () => {
  const offersSection = document.querySelector(".bonuses");
  offersSection.classList.add("loading");
  const offersData = getOffersData();

  setTimeout(() => {
    offersSection.classList.remove("loading");
    offersSection.innerHTML = `
      <h1 class="bonuses-title">Bonuses 9</h1>
      <div class="offers">
        ${offersData
          .map(
            (offer) => `
          <article class="card">
            <span class="badge">${offer.badge}</span>
            <div class="logo ${offer.logo}"></div>
            <h2>${offer.title}</h2>
            <ul>
              ${offer.features.map((feature) => `<li>${feature}</li>`).join("")}
            </ul>
            <div class="rating">
              <img src="images/Star.svg" alt="star" class="star-icon" /> 
              ${offer.rating} <span class="rating-text">Avaliações (${
              offer.reviews
            })</span>
            </div>
            <button>Receber Bônus</button>
          </article>
        `
          )
          .join("")}
      </div>
    `;
  }, 1000);
};

const renderHowWeChoose = () => {
  const howWeChooseSection = document.querySelector(".how-we-choose");
  howWeChooseSection.classList.add("loading");
  const howWeChooseData = getHowWeChooseData();

  setTimeout(() => {
    howWeChooseSection.classList.remove("loading");
    howWeChooseSection.innerHTML = `
      <h1 class="section-heading">${howWeChooseData.title}</h1>
      <h1 class="section-heading">${howWeChooseData.subtitle}</h1>
      <p>${howWeChooseData.description}</p>
      <div class="criteria">
        ${howWeChooseData.criteria
          .map(
            (criterion) => `
          <div class="criterion">
            <div class="criterion-plus">+</div>
            <p class="criterion-text">${criterion.text}</p>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }, 2500);
};

const renderSecurity = () => {
  const securitySection = document.querySelector(".security");
  securitySection.classList.add("loading");
  const securityData = getSecurityData();

  setTimeout(() => {
    securitySection.classList.remove("loading");
    securitySection.innerHTML = `
      <h1 class="section-heading">${securityData.title}</h1>
      ${securityData.paragraphs
        .map((paragraph) => `<p>${paragraph}</p>`)
        .join("")}
    `;
  }, 3500);
};

document.addEventListener("DOMContentLoaded", () => {
  renderOffers();
  renderHowWeChoose();
  renderSecurity();
});
