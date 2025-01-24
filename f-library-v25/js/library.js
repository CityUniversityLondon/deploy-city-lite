/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aria-attributes.js":
/*!********************************!*\
  !*** ./src/aria-attributes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/**
 * WAI-ARIA attributes
 *
 * Quicker to type, intellisensible, documents what they're for, and saves a
 * tiny amount of code by replacing the string 'aria-' with a minifiable
 * variable and dot notation.
 *
 * @module aria-attributes
 * @author Web Development
 * @copyright City, University of London 2018
 */

/**
 * @readonly
 * @enum {string}
 */
const aria = {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  activeDescendant: 'aria-activedescendant',

  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  atomic: 'aria-atomic',

  /** Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made. */
  autoComplete: 'aria-autocomplete',

  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  busy: 'aria-busy',

  /** Indicates the current "checked" state of checkboxes, radio buttons, and other widgets. */
  checked: 'aria-checked',

  /** Defines the total number of columns in a table, grid, or treegrid. */
  colCount: 'aria-colcount',

  /** Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid. */
  colIndex: 'aria-colindex',

  /** Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid. */
  colSpan: 'aria-colspan',

  /** Identifies the element (or elements) whose contents or presence are controlled by the current element. */
  controls: 'aria-controls',

  /** Indicates the element that represents the current item within a container or set of related elements. */
  current: 'aria-current',

  /** Identifies the element (or elements) that describes the object. */
  describedBy: 'aria-describedby',

  /** Identifies the element that provides a detailed, extended description for the object. */
  details: 'aria-details',

  /** Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable. */
  disabled: 'aria-disabled',

  /** [Deprecated in ARIA 1.1] Indicates what functions can be performed when a dragged object is released on the drop target. */
  dropEffect: 'aria-dropeffect',

  /** Identifies the element that provides an error message for the object. */
  errorMessage: 'aria-errormessage',

  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  expanded: 'aria-expanded',

  /** Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order. */
  flowTo: 'aria-flowto',

  /** [Deprecated in ARIA 1.1] Indicates an element's "grabbed" state in a drag-and-drop operation. */
  grabbed: 'aria-grabbed',

  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  hasPopup: 'aria-haspopup',

  /** Indicates whether the element is exposed to an accessibility API. */
  hidden: 'aria-hidden',

  /** Indicates the entered value does not conform to the format expected by the application. */
  invalid: 'aria-invalid',

  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  keyShortcuts: 'aria-keyshortcuts',

  /** Defines a string value that labels the current element. */
  label: 'aria-label',

  /** Identifies the element (or elements) that labels the current element. */
  labelledBy: 'aria-labelledby',

  /** Defines the hierarchical level of an element within a structure. */
  level: 'aria-level',

  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  live: 'aria-live',

  /** Indicates whether an element is modal when displayed. */
  modal: 'aria-modal',

  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  multiLine: 'aria-multiline',

  /** Indicates that the user may select more than one item from the current selectable descendants. */
  multiSelectable: 'aria-multiselectable',

  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  orientation: 'aria-orientation',

  /** Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship between DOM elements where the DOM hierarchy cannot be used to represent the relationship. */
  owns: 'aria-owns',

  /** Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format. */
  placeholder: 'aria-placeholder',

  /** Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. */
  posInset: 'aria-posinset',

  /** Indicates the current "pressed" state of toggle buttons. */
  pressed: 'aria-pressed',

  /** Indicates that the element is not editable, but is otherwise operable. */
  readOnly: 'aria-readonly',

  /** Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. */
  relevant: 'aria-relevant',

  /** Indicates that user input is required on the element before a form may be submitted. */
  required: 'aria-required',

  /** Defines a human-readable, author-localized description for the role of an element. */
  roleDescription: 'aria-roledescription',

  /** Defines the total number of rows in a table, grid, or treegrid. */
  rowCount: 'aria-rowcount',

  /** Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid. */
  rowIndex: 'aria-rowindex',

  /** Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid. */
  rowSpan: 'aria-rowspan',

  /** Indicates the current "selected" state of various widgets. */
  selected: 'aria-selected',

  /** Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. */
  setSize: 'aria-setsize',

  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  sort: 'aria-sort',

  /** Defines the maximum allowed value for a range widget. */
  valueMax: 'aria-valuemax',

  /** Defines the minimum allowed value for a range widget. */
  valueMin: 'aria-valuemin',

  /** Defines the current value for a range widget. */
  valueNow: 'aria-valuenow',

  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  valueText: 'aria-valuetext'
};
/* harmony default export */ __webpack_exports__["default"] = (Object.freeze(aria));

/***/ }),

/***/ "./src/library.js":
/*!************************!*\
  !*** ./src/library.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tryCatch": () => (/* binding */ tryCatch)
/* harmony export */ });
/* harmony import */ var _patterns_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patterns-library */ "./src/patterns-library.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/devcorate/devcorate */ "./src/patterns/devcorate/devcorate.js");


/**
 * Main entry - Library
 *
 * @author Web Development
 * @copyright City, University of London 2025
 */



const edgeVersion = 12;
/**
 * try a function, log the error if it throws an exception.
 *
 * @param {Function} f - The function to call.
 */

function tryCatch(f) {
  try {
    return f();
  } catch (e) {
    (0,_util__WEBPACK_IMPORTED_MODULE_1__.gaEvent)('jsError', 'JavaScript error', `Line ${e.lineNumber} – ${e.message}`, `Pattern launch ${e.fileName} (${window.location})`, true);
  }
}
/**
 * Runs the function for each pattern against every element that has the
 * matching class, unless the element also has that class with a '-no-js' suffix
 * (for cases where you want to use the CSS for a pattern, but not the
 * functionality).
 *
 * @param {object} pattern - An object containing the class name to trigger the pattern and the launch function to run for those elements.
 */

function launchPattern(pattern) {
  if (typeof pattern === 'function') {
    tryCatch(pattern);
  } else if (pattern.launchQuery) {
    const {
      launchFn,
      launchQuery
    } = pattern;
    Array.from(document.querySelectorAll(launchQuery)).filter(elem => elem.className.indexOf(`${launchQuery}-no-js`)).forEach(elem => tryCatch(() => launchFn(elem)));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (/(Trident|MSIE)/.test(navigator.userAgent)) {
    return;
  } else {
    Array.from(document.getElementsByTagName('html')).forEach(html => {
      let ie = (0,_util__WEBPACK_IMPORTED_MODULE_1__.detectIE)();
      (0,_util__WEBPACK_IMPORTED_MODULE_1__.removeClass)(html, 'no-js', false);

      if (ie >= edgeVersion) {
        html.className = (html.className + ' js ' + 'edge').trim();
      } else {
        html.className = (html.className + ' js').trim();
      }
    });
    _patterns_library__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(launchPattern);
    const parameters = (0,_util__WEBPACK_IMPORTED_MODULE_1__.parametersToObject)(location.search);
    parameters['dev'] && (0,_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_2__.devcorate)(document.querySelector('body'), 'dev', parameters['dev']);
    parameters['rel'] && (0,_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_2__.devcorate)(document.querySelector('body'), 'rel', parameters['rel']);
  }
}, false);

/***/ }),

/***/ "./src/patterns-library.js":
/*!*********************************!*\
  !*** ./src/patterns-library.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _patterns_library_accordion_library_accordion_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patterns/library/accordion-library/accordion-library */ "./src/patterns/library/accordion-library/accordion-library.js");
/* harmony import */ var _patterns_menu_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns/menu/menu */ "./src/patterns/menu/menu.js");


/**
 * Pattern library - City Library
 *
 * Exports an array of patterns to execute on startup.
 *
 * @module patterns
 * @author Web Development
 * @copyright City, University of London 2025
 */
// accordion - CityR
// tabs - CityR
// opening-times 
// primary nav - mobile
 // import backToTop from './patterns/library/back-to-top/back-to-top';


/* harmony default export */ __webpack_exports__["default"] = ([_patterns_library_accordion_library_accordion_library__WEBPACK_IMPORTED_MODULE_0__["default"], _patterns_menu_menu__WEBPACK_IMPORTED_MODULE_1__["default"]]);

/***/ }),

/***/ "./src/patterns/devcorate/devcorate.js":
/*!*********************************************!*\
  !*** ./src/patterns/devcorate/devcorate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "devcorate": () => (/* binding */ devcorate)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");


/**
 * Devcorate
 *
 * @module patterns/devcorate/devcorate
 * @author Web Development
 * @copyright City, University of London 2018
 */

/**
 * Persist a query parameter to all same-site anchors inside an element.
 *
 * @param {HTMLElement} elem - An element containing anchors to decorate.
 * @param {string} param - The name of a query parameter.
 * @param {string} value - The value for the query parameter.
 */

function devcorate(elem, param, value) {
  Array.from(elem.querySelectorAll('a')).forEach(anchor => {
    if (anchor.origin === window.location.origin) {
      const parameters = anchor.search ? (0,_util__WEBPACK_IMPORTED_MODULE_0__.parametersToObject)(anchor.search) : {};
      parameters[param] = value;
      anchor.href = `${anchor.origin}${anchor.pathname}${(0,_util__WEBPACK_IMPORTED_MODULE_0__.objectToParameters)(parameters)}${anchor.hash}`;
    }
  });
}

/***/ }),

/***/ "./src/patterns/library/accordion-library/accordion-library.js":
/*!*********************************************************************!*\
  !*** ./src/patterns/library/accordion-library/accordion-library.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/**
 * modal
 *
 * @module patterns/accordion/accordion-library
 * @author Web Development
 * @copyright City, University of London 2025
 *
 */
const className = 'accordion';

function launchAccordion() {
  console.log('foo');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchAccordion,
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/patterns/menu/menu-formatters.js":
/*!**********************************************!*\
  !*** ./src/patterns/menu/menu-formatters.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepareNavigation": () => (/* binding */ prepareNavigation),
/* harmony export */   "prepareSideNavigation": () => (/* binding */ prepareSideNavigation),
/* harmony export */   "listenForNavigationToggles": () => (/* binding */ listenForNavigationToggles)
/* harmony export */ });
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");


/**
 * Generic navigation functions for menu and secondary navigation.
 *
 * @module menu-formatters
 * @author Web Development
 * @copyright City, University of London 2025
 */



const oneSecond = 1000,
      scrollDuration = (0,_util__WEBPACK_IMPORTED_MODULE_1__.reduceMotion)() ? 0 : oneSecond;
/**
 * Set sub-menu button attributes for the open/closed state.
 *
 * @param {HTMLButtonElement} button - The button to decorate.
 * @param {boolean} open - Should it be open?
 * @param {string} buttonTextClassName - The class of the text span.
 */

function setNavigationItemButtonDetails(button, open, rootClass) {
  const navigationItem = button.closest('li'),
        sectionText = navigationItem.dataset.title + ' section',
        buttonClassName = rootClass + '__button',
        buttonTextClassName = buttonClassName + '__text',
        textSpan = button.querySelector(`.${buttonTextClassName}`),
        text = open ? 'Close ' : 'Open ';
  open && Array.from(button.closest('ul').querySelectorAll('button')).forEach(button => setNavigationItemButtonDetails(button, false, rootClass));
  navigationItem.dataset.open = open;
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].expanded, open);
  button.title = text + sectionText;
  textSpan.innerText = text + sectionText;
}
/**
 * Toggle a sub-navigation open or closed.
 */


function toggleSubNavigation(button, rootClass) {
  const expanded = button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].expanded); // Menu slide open/close animation for mobile menu

  if (expanded === 'true') {
    button.parentNode.parentNode.classList.remove('menu-animation__slideOpen');
    button.parentNode.parentNode.classList.add('menu-animation__slideClose');
    setTimeout(() => {
      button.parentNode.parentNode.classList.remove('menu-animation__slideClose');
    }, 1000); // fixes a bug with sub menu, when opening and closing burger bun after interaction already took place inside the menu
  } else {
    button.parentNode.parentNode.classList.remove('menu-animation__slideClose');
    button.parentNode.parentNode.classList.add('menu-animation__slideOpen');
  }

  (0,_util__WEBPACK_IMPORTED_MODULE_1__.toBool)(expanded) ? setNavigationItemButtonDetails(button, false, rootClass) : setNavigationItemButtonDetails(button, true, rootClass);
  zenscroll__WEBPACK_IMPORTED_MODULE_0___default().intoView(button.closest('li'), scrollDuration);
}
/**
 * Decorate sub-navigation element with the appropriate attributes.
 *
 * @param {HTMLLIElement} navigationItem - The list item representing button navigation item.
 * @param {string} rootClass - The class of the navigation element.
 */


function prepareSubNavigation(navigationItem, rootClass) {
  const navigationItemBtn = document.createElement('button'),
        iconSpan = document.createElement('span'),
        textSpan = document.createElement('span'),
        controlsClassName = rootClass + '__controls',
        buttonClassName = rootClass + '__button',
        buttonTextClassName = buttonClassName + '__text',
        buttonIconClassName = buttonClassName + '__icon',
        currentClassName = rootClass + '__current',
        hierarchyClassName = rootClass + '__hierarchy',
        controlsWrapper = navigationItem.querySelector(`.${controlsClassName}`);
  navigationItemBtn.setAttribute('type', 'button');
  iconSpan.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].hidden, 'true');
  iconSpan.className = `${buttonIconClassName} fal fa-sharp fa-fw`;
  textSpan.className = `${buttonTextClassName}`;
  (0,_util__WEBPACK_IMPORTED_MODULE_1__.appendAll)(navigationItemBtn, [iconSpan, textSpan]);
  controlsWrapper.appendChild(navigationItemBtn);

  if (navigationItem.className.indexOf(currentClassName) >= 0 || navigationItem.className.indexOf(hierarchyClassName) >= 0) {
    setNavigationItemButtonDetails(navigationItemBtn, true, rootClass);
  } else {
    setNavigationItemButtonDetails(navigationItemBtn, false, rootClass);
  }
}
/**
 * Iterate over the navigation lists, transforming them into the initial
 * navigation with the current asset lineage open.
 *
 * @param {HTMLElement} navigation - The navigation container.
 * @param {string} rootClass - The class of the navigation element.
 */


function prepareNavigation(navigation, rootClass) {
  Array.from(navigation.querySelectorAll('li')).forEach(navigationItem => {
    const subNavigation = navigationItem.querySelector('ul');
    subNavigation && subNavigation.firstElementChild && prepareSubNavigation(navigationItem, rootClass);
  });
}
/**
 * Iterate over the navigation lists, transforming them into the initial
 * navigation with the current asset lineage open. When side navigation it creates extra control elements.
 *
 * @param {HTMLElement} navigation - The navigation container.
 * @param {string} rootClass - The class of the navigation element.
 */

function prepareSideNavigation(navigation, rootClass) {
  const controlsClassName = rootClass + '__controls';
  Array.from(navigation.querySelectorAll('li')).forEach(navigationItem => {
    const link = navigationItem.querySelector('a'),
          subNavigation = navigationItem.querySelector('ul'),
          linkText = 'Visit ' + navigationItem.dataset.title,
          textWrapper = document.createElement('span'),
          controlsWrapper = document.createElement('div');
    controlsWrapper.className = controlsClassName;
    textWrapper.appendChild(link.firstChild.cloneNode(true));
    link.replaceChild(textWrapper, link.firstChild);
    link.title = linkText;
    navigationItem.replaceChild(controlsWrapper, link);
    controlsWrapper.appendChild(link);
    subNavigation && subNavigation.firstElementChild && prepareSubNavigation(navigationItem, rootClass);
  });
}
/**
 * Open/close the sub-menu when its button is clicked.
 *
 * @param {HTMLUListElement} subNavigation - Toggle the sub-navigation when its button is clicked.
 * @param {string} rootClass - The class of the navigation element.
 */

function listenForNavigationToggles(subNavigation, rootClass) {
  Array.from(subNavigation.querySelectorAll('button')).forEach(button => button.addEventListener('click', () => toggleSubNavigation(button, rootClass), true));
}

/***/ }),

/***/ "./src/patterns/menu/menu.js":
/*!***********************************!*\
  !*** ./src/patterns/menu/menu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var _menu_formatters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-formatters */ "./src/patterns/menu/menu-formatters.js");


/**
 * Global menu
 *
 * @module patterns/menu/menu
 * @author Web Development
 * @copyright City, University of London 2025
 */




const className = 'menu',
      hierarchyClassName = className + '__hierarchy',
      currentClassName = className + '__current',
      veilClassName = className + '__veil',
      contentClassName = className + '__content',
      contentHeaderClassName = contentClassName + '__header',
      currentPage = contentHeaderClassName + '--current',
      controlsClassName = className + '__controls',
      buttonDisplayClassName = className + '__display__button',
      buttonClassName = className + '__button',
      level1ClassName = className + '__level1',
      buttonTextClassName = buttonClassName + '__text';
/**
 * Creates a function for setting a menu to be open or closed.
 *
 * @param {HTMLElement} menu - The menu container.
 * @param {HTMLButtonElement} button - The button that toggles the menu.
 * @returns {Function} A function that will set the menu to be open/closed.
 */

function menuSetter(menu, button) {
  /**
   * @param {boolean} open - Set the menu to be open?
   */
  const setMenu = open => {
    const buttonText = button.querySelector(`.${buttonTextClassName}`);
    menu.dataset.open = open;
    buttonText.innerText = open ? 'Close' : 'Menu';
    button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].expanded, open);
  };

  return setMenu;
}
/**
 * Opens or closes the menu, (de)activates the focus trap if provided, and
 * scrolls the sub-menus so that the current page lineage or open menus are in
 * view.
 *
 * @param {HTMLButtonElement} button - The button for toggling the menu.
 * @param {Function} setMenu - A function for setting menu attributes to be open/closed.
 * @param {object} trap - The focus trap object.
 * @param {HTMLElement} veil - The veiling element.
 */


function toggleMenu(button, setMenu, trap, veil) {
  const expanded = button.getAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].expanded);

  if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.toBool)(expanded)) {
    trap.deactivate();
    veil.dataset.on = 'false';
    setMenu(false);
  } else {
    setMenu(true);
    veil.dataset.on = 'true';
    trap.activate();
  }
}
/**
 * Turn the menu label into a button to toggle the menu open and closed.
 *
 * While the menu is open, a focus trap should limit tab indexing to the menu
 * and its button.
 *
 * @param {HTMLElement} label - The menu label.
 * @param {HTMLButtonElement} button - A button element.
 * @param {Function} setMenu - A function to open/close the menu.
 * @param {HTMLElement} veil - The veiling element.
 */


function createMenuToggle(label, button, setMenu, veil) {
  const buttonWrapper = document.createElement('div'),
        menu = label.closest(`.${className}`);
  button.className = 'menu__display__button__button';
  buttonWrapper.className = 'menu__display__button__button__wrapper';
  button.setAttribute('type', 'button');
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].hasPopup, 'menu');
  button.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].label, 'Toggle menu');
  Array.from(label.childNodes).forEach(child => buttonWrapper.appendChild(child));
  button.appendChild(buttonWrapper);
  const trap = focus_trap__WEBPACK_IMPORTED_MODULE_0___default()(menu, {
    /**
     * Initial focus should be whichever of: the current page; a menu item
     * in the asset lineage or; the first item in the last column appears
     * last in the DOM and is visible.
     */
    initialFocus: () => {
      const open = Array.from(menu.querySelectorAll([`.${contentHeaderClassName} > span`, `.${currentClassName} > .${controlsClassName} > a`, `.${hierarchyClassName} > .${controlsClassName} > a`, `.${level1ClassName} > ul > li:first-of-type > .${controlsClassName} > a`, `.${currentPage} > a`].join(','))).filter(elem => (0,_util__WEBPACK_IMPORTED_MODULE_1__.isVisible)(elem));
      return open[open.length - 1];
    },
    onDeactivate: () => toggleMenu(button, setMenu, trap, veil),
    clickOutsideDeactivates: true
  });
  button.addEventListener('click', () => toggleMenu(button, setMenu, trap, veil), true);
}
/**
 * Transform the Matrix-generated menu lists into an interactive menu.
 *
 * @param {HTMLElement} menu - The menu element.
 */


function launchMenu(menu) {
  // During testing only: remove 'under construction' indicators globally
  //     menu.innerHTML = menu.innerHTML.replace(/\(\( /g, '').replace(/ \)\)/g, '');
  const label = menu.querySelector(`.${buttonDisplayClassName}`),
        button = document.createElement('button'),
        veil = document.createElement('div'),
        setMenu = menuSetter(menu, button);
  veil.className = veilClassName;
  veil.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_2__["default"].hidden, 'true');
  document.querySelector('body').insertBefore(veil, document.querySelector('main'));
  createMenuToggle(label, button, setMenu, veil);
  label.appendChild(button);
  setMenu(false);
  (0,_menu_formatters__WEBPACK_IMPORTED_MODULE_3__.prepareNavigation)(menu.querySelector(`.${level1ClassName}`), className);
  (0,_menu_formatters__WEBPACK_IMPORTED_MODULE_3__.listenForNavigationToggles)(menu.querySelector(`.${level1ClassName}`), className);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  launchFn: launchMenu,
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "toArray": () => (/* binding */ toArray),
/* harmony export */   "parametersToObject": () => (/* binding */ parametersToObject),
/* harmony export */   "objectToParameters": () => (/* binding */ objectToParameters),
/* harmony export */   "gaEvent": () => (/* binding */ gaEvent),
/* harmony export */   "detectIE": () => (/* binding */ detectIE),
/* harmony export */   "checkIntersectionObserver": () => (/* binding */ checkIntersectionObserver),
/* harmony export */   "createHTMLElement": () => (/* binding */ createHTMLElement),
/* harmony export */   "appendAll": () => (/* binding */ appendAll),
/* harmony export */   "reduceMotion": () => (/* binding */ reduceMotion),
/* harmony export */   "toBool": () => (/* binding */ toBool),
/* harmony export */   "verticallyInWindow": () => (/* binding */ verticallyInWindow),
/* harmony export */   "screenWidth": () => (/* binding */ screenWidth),
/* harmony export */   "isVisible": () => (/* binding */ isVisible)
/* harmony export */ });


const partialMatchFn = m => s => s.indexOf(m) < 0,
      fullMatchFn = m => s => s !== m;
/**
 * Remove a class name from an HTML element.
 *
 * @param {HTMLElement} elem - An HTML element.
 * @param {string} className - A string representing the class to remove.
 * @param {boolean} [removePartials] - If true, remove partially matching classes.
 */


function removeClass(elem, className, removePartials) {
  const matchFn = removePartials ? partialMatchFn(className) : fullMatchFn(className);
  elem.className = elem.className.split(/\s+/).filter(s => matchFn(s)).join(' ');
}
/**
 *
 * Turn DOM elements to array e.g return [li, li, li] from DOM element selecting 'li' <ul><li></li><li></li><li></li></ul>
 *
 * @param {object} object - Object
 */

function toArray(obj) {
  let array = []; // iterate backwards ensuring that length is an UInt32

  for (let i = obj.length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
/**
 * Turn a query string into an object.
 *
 * @param {string} parameterString - An HTML query string.
 * @returns {object} An object containing the parameters.
 */

function parametersToObject(parameterString) {
  const parameters = {};
  parameterString.substr(1).split('&').forEach(parameter => {
    const [k, v] = parameter.split('=');
    parameters[k] = v;
  });
  return parameters;
}
/**
* Turn an object into a query string.
*
* @param {object} parameterObj - An object containing the parameters and their values.
* @returns {string} A string of the parameters.
*/

function objectToParameters(parameterObj) {
  if (Object.keys(parameterObj).length > 0) {
    let parameters = '?';

    for (const key in parameterObj) {
      parameters.length !== 1 && (parameters += '&');
      parameters += key + '=' + parameterObj[key];
    }

    return parameters;
  } else {
    return '';
  }
}
/**
 * Track a Google Analytics event.
 *
 * @param {string} event - The event key for Tag Manager.
 * @param {string} eventCategory - The event category.
 * @param {string} eventAction - The event action.
 * @param {string} [eventLabel] - The event label.
 * @param {number} [eventValue] - The event value.
 * @param {boolean} [nonInteractionHit] - Does this count as interacting with the page?
 */

function gaEvent(event, eventCategory, eventAction, eventLabel, eventValue, nonInteractionHit) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: event,
    eventCategory: eventCategory,
    eventAction: eventAction,
    eventLabel: eventLabel,
    eventValue: eventValue,
    nonInteractionHit: nonInteractionHit
  });
}
function detectIE() {
  const ua = window.navigator.userAgent,
        versionLength = 10,
        msie = ua.indexOf('MSIE '),
        msieVersionOffset = 5;

  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + msieVersionOffset, ua.indexOf('.', msie)), versionLength);
  }

  const trident = ua.indexOf('Trident/'),
        tridentVersionOffset = 3;

  if (trident > 0) {
    // IE 11 => return version number
    let rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + tridentVersionOffset, ua.indexOf('.', rv)), versionLength);
  }

  const edge = ua.indexOf('Edge/'),
        edgeVersionOffset = 5;

  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + edgeVersionOffset, ua.indexOf('.', edge)), versionLength);
  } // other browser


  return false;
}
/**
 * Check if browser supports IntersectionObserver API
 *
 * @returns {Boolean} -
 */

function checkIntersectionObserver() {
  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
    return true;
  } else {
    return false;
  }
}
/**
 * Create elements containing classes, content and any other attributes
 *
 * @param {string} type - Type of element to create, e.g. "div", "button".
 * @param {array} attributes - Array of objects specifying which attributes to assign to the element i.e. {label : "class", val : "container"}
 */

function createHTMLElement(type, attributes) {
  let el = document.createElement(type);
  attributes.map(function (att) {
    att.label === 'content' ? el.appendChild(document.createTextNode(att.val)) : att.label === 'html' ? el.innerHTML = att.val : el.setAttribute(att.label, att.val);
  });
  return el;
}
/**
 * Append an array of elements to an element.
 *
 * @param {HTMLElement} elem - The parent element.
 * @param {HTMLElement[]} children - An array of elements to append to it.
 */

function appendAll(elem, children) {
  children.forEach(child => elem.appendChild(child));
}
/**
 * Detect whether reduced motion is enabled.
 *
 * If it is, you should shortcut animations, disable autoplay elements, avoid
 * smooth scrolling in favour of jump scrolling, etc.
 *
 * Currently unsupported by Chrome, but works in Safari and Firefox.
 *
 * @returns {boolean} Boolean indicating that the reduce motion media query matches.
 */

function reduceMotion() {
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  return reducedMotionQuery.matches ? true : false;
}
/**
 * Turns string boolean into real boolean.
 *
 * @param {string} s - A string that may be 'true'.
 * @returns {boolean} True if 'true'.
 */

function toBool(s) {
  return s === 'true' ? true : false;
}
/**
 * Predicate testing whether an element is positioned in the window.
 *
 *
 * @param {HTMLElement} elem - An HTML element.
 * @returns {boolean} - Is it onscreen?
 */

function verticallyInWindow(elem) {
  return elem.getBoundingClientRect().top >= 0 && elem.getBoundingClientRect().top <= window.innerHeight ? true : false;
}
/**
 * Screen width
 *
 * @param {size} string - variable name for sreensize value. To be consistent with values stored in _variables.scss
 */

function screenWidth(size) {
  switch (size) {
    case 'tiny':
      return 375;
      break;

    case 'mobile':
      return 432;
      break;

    case 'tablet':
      return 768;
      break;

    case 'between':
      return 900;
      break;

    case 'small':
      return 1024;
      break;

    case 'desktop':
      return 1280;
      break;

    case 'large':
      return 1440;
      break;

    case '1080':
      return 1920;
      break;

    case '4k':
      return 3840;
      break;

    case '8k':
      return 7680;
      break;

    default:
      return 1280;
      break;
  }
}
/**
 * Predicate testing whether an element is currently visible, as opposed to
 * displayed: none; or similar. Doesn't necessarily mean it's visible in the
 * window.
 *
 * @param {HTMLElement} elem - An HTML element.
 * @returns {boolean} - Is it visible?
 */

function isVisible(elem) {
  return elem.offsetHeight !== 0 && elem.offsetWidth !== 0 ? true : false;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"library": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcity_lite"] = self["webpackChunkcity_lite"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor-dependencies"], () => (__webpack_require__("./src/library.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=library.js.map