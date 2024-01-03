!function(){// We want to listen for the load event dispatched directly on the window.
window.addEventListener("load",()=>{// When the page loads we want to check if the user is on a mobile device.
/** @type {boolean} */let t=window.matchMedia("only screen and (max-width: 767px)").matches,n=document.querySelector("div[class='nav-menu']");n?.setAttribute("aria-hidden",`${t?"true":"false"}`),new e});/**
 * Create a navigation component. 
 */class e{#e=/** @type {HTMLElement} */document.querySelector(".nav-container");/**
   * Takes in no argument
   */constructor(){this.#e.addEventListener("click",this.#t)}/**
   *
   * @param {Event} evtObj - The click event carried out by the user.
   * @return {void}
   */#t(e){let t=e.target;if(!(t instanceof HTMLElement))return;/** @type {HTMLButtonElement | null} */let n=t.closest(".menuBtn");if(!n)return;// On mobile devices it is true that the menu is closed when the user clicks the device. So when that is the case what do we want to do.
/** @type {Boolean} */let a="false"===n.getAttribute("aria-expanded");n?.nextElementSibling?.setAttribute("aria-hidden",`${!a}`),n?.setAttribute("aria-expanded",`${a}`);/** @type {HTMLDivElement | null} */let i=document.querySelector(".overlay");a?(n?.nextElementSibling?.classList.add("active"),i?.classList.add("active")):(i?.classList.remove("active"),n?.nextElementSibling?.classList.remove("active"))}}}();//# sourceMappingURL=index.02a3d45c.js.map

//# sourceMappingURL=index.02a3d45c.js.map
