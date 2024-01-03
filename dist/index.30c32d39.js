// We want to listen for the load event dispatched directly on the window.
window.addEventListener("load",()=>{// When the page loads we want to check if the user is on a mobile device.
/** @type {boolean} */let t=window.matchMedia("only screen and (max-width: 767px)").matches,a=document.querySelector("div[class='nav-menu']");a?.setAttribute("aria-hidden",`${t?"true":"false"}`),new e});/**
 * Create a navigation component. 
 */class e{#e=/** @type {HTMLElement} */document.querySelector(".nav-container");/**
   * Takes in no argument
   */constructor(){this.#e.addEventListener("click",this.#t)}/**
   *
   * @param {Event} evtObj - The click event carried out by the user.
   * @return {void}
   */#t(e){let t=e.target;if(!(t instanceof HTMLElement))return;/** @type {HTMLButtonElement | null} */let a=t.closest(".menuBtn");if(!a)return;// On mobile devices it is true that the menu is closed when the user clicks the device. So when that is the case what do we want to do.
/** @type {Boolean} */let n="false"===a.getAttribute("aria-expanded");a?.nextElementSibling?.setAttribute("aria-hidden",`${!n}`),a?.setAttribute("aria-expanded",`${n}`);/** @type {HTMLDivElement | null} */let i=document.querySelector(".overlay");n?(a?.nextElementSibling?.classList.add("active"),i?.classList.add("active")):(i?.classList.remove("active"),a?.nextElementSibling?.classList.remove("active"))}}//# sourceMappingURL=index.30c32d39.js.map

//# sourceMappingURL=index.30c32d39.js.map
