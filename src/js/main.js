// We want to listen for the load event dispatched directly on the window.
window.addEventListener('load', () => {
  // When the page loads we want to check if the user is on a mobile device.

  /** @type {boolean} */
  const mobileDevice = window.matchMedia(
    'only screen and (max-width: 767px)'
  ).matches;

  /** @type {HTMLDivElement | null} */
  const navMenu = document.querySelector('div[class=\'nav-menu\']');
  navMenu?.setAttribute('aria-hidden', `${mobileDevice ? 'true' : 'false'}`);

  new NavigationComponent();
});


/**
 * Create a navigation component. 
 */
class NavigationComponent {
  #nav = /** @type {HTMLElement} */ (document.querySelector('.nav-container'));

  /**
   * Takes in no argument
   */
  constructor() {
    this.#nav.addEventListener('click', this.#handleMobileNavigation);
  }

  /**
   *
   * @param {Event} evtObj - The click event carried out by the user.
   * @return {void}
   */
  #handleMobileNavigation(evtObj) {
    const eventTarget = evtObj.target;
    if (!(eventTarget instanceof HTMLElement)) return;

    /** @type {HTMLButtonElement | null} */
    const navBtn = eventTarget.closest('.menuBtn');
    if (!navBtn) return;

    // On mobile devices it is true that the menu is closed when the user clicks the device. So when that is the case what do we want to do.
    /** @type {Boolean} */
    const closedMenu =
      navBtn.getAttribute('aria-expanded') === 'false' || false;

    navBtn?.nextElementSibling?.setAttribute('aria-hidden', `${!closedMenu}`);
    navBtn?.setAttribute('aria-expanded', `${closedMenu}`);

    /** @type {HTMLDivElement | null} */
    const overlay = document.querySelector('.overlay');

    if (closedMenu) {
      navBtn?.nextElementSibling?.classList.add('active');
      overlay?.classList.add('active');
    } else {
      overlay?.classList.remove('active');
      navBtn?.nextElementSibling?.classList.remove('active');
    }
  }
}
