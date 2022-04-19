/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aria-attributes.js":
/*!********************************!*\
  !*** ./src/aria-attributes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.freeze(aria));

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tryCatch": () => (/* binding */ tryCatch)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns */ "./src/patterns.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/util.js");
/* harmony import */ var _patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns/devcorate/devcorate */ "./src/patterns/devcorate/devcorate.js");




/**
 * Main entry
 *
 * @author Web Development
 * @copyright City, University of London 2022
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
    (0,_util__WEBPACK_IMPORTED_MODULE_2__.gaEvent)('jsError', 'JavaScript error', `Line ${e.lineNumber} – ${e.message}`, `Pattern launch ${e.fileName} (${window.location})`, true);
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
      let ie = (0,_util__WEBPACK_IMPORTED_MODULE_2__.detectIE)();
      (0,_util__WEBPACK_IMPORTED_MODULE_2__.removeClass)(html, 'no-js', false);

      if (ie >= edgeVersion) {
        html.className = (html.className + ' js ' + 'edge').trim();
      } else {
        html.className = (html.className + ' js').trim();
      }
    });
    _patterns__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(launchPattern);
    const parameters = (0,_util__WEBPACK_IMPORTED_MODULE_2__.parametersToObject)(location.search);
    parameters['dev'] && (0,_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_3__.devcorate)(document.querySelector('body'), 'dev', parameters['dev']);
    parameters['rel'] && (0,_patterns_devcorate_devcorate__WEBPACK_IMPORTED_MODULE_3__.devcorate)(document.querySelector('body'), 'rel', parameters['rel']);
  }
}, false);

/***/ }),

/***/ "./src/patterns.js":
/*!*************************!*\
  !*** ./src/patterns.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _patterns_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patterns/accordion/accordion */ "./src/patterns/accordion/accordion.js");
/* harmony import */ var _patterns_slider_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns/slider/slider */ "./src/patterns/slider/slider.js");
/* harmony import */ var _patterns_modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patterns/modal/modal */ "./src/patterns/modal/modal.js");


/**
 * Pattern library
 *
 * Exports an array of patterns to execute on startup.
 *
 * @module patterns
 * @author Web Development
 * @copyright City, University of London 2022
 */



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([_patterns_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__["default"], _patterns_slider_slider__WEBPACK_IMPORTED_MODULE_1__["default"], _patterns_modal_modal__WEBPACK_IMPORTED_MODULE_2__["default"]]);

/***/ }),

/***/ "./src/patterns/accordion/accordion.js":
/*!*********************************************!*\
  !*** ./src/patterns/accordion/accordion.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const className = 'accordion';

const launchAccordion = function () {};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  launchFn: launchAccordion,
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/patterns/devcorate/devcorate.js":
/*!*********************************************!*\
  !*** ./src/patterns/devcorate/devcorate.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "devcorate": () => (/* binding */ devcorate)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util */ "./src/util.js");




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
      const parameters = anchor.search ? (0,_util__WEBPACK_IMPORTED_MODULE_1__.parametersToObject)(anchor.search) : {};
      parameters[param] = value;
      anchor.href = `${anchor.origin}${anchor.pathname}${(0,_util__WEBPACK_IMPORTED_MODULE_1__.objectToParameters)(parameters)}${anchor.hash}`;
    }
  });
}

/***/ }),

/***/ "./src/patterns/modal/modal.js":
/*!*************************************!*\
  !*** ./src/patterns/modal/modal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! zenscroll */ "./node_modules/zenscroll/zenscroll.js");
/* harmony import */ var zenscroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(zenscroll__WEBPACK_IMPORTED_MODULE_3__);


/**
 * modal
 *
 * @module patterns/pagination/pagination
 * @author Web Development
 * @copyright City, University of London 2018
 *
 */




const className = 'modal',
      bodyClassName = className + '__body',
      escapeKey = 'Escape',
      oneSecond = 1000,
      scrollDuration = (0,_util__WEBPACK_IMPORTED_MODULE_0__.reduceMotion)() ? 0 : oneSecond,
      scrollTo = true;
let trap;
/**
 * launch function
 *
 * @param {HTMLElement} modal - an HTML element with the modal class.
 */

function launchModal(modal) {
  let dialogArray = [];
  const dialogTopic = modal.getAttribute('data-topic');
  Array.from(modal.getElementsByTagName('li')).forEach((list, i) => {
    if (!list.dataset.modalcontent || list.dataset.modalcontent === 'true') {
      const wrapper = document.createElement('div'),
            listButton = document.createElement('button'),
            listButtonSpan = document.createElement('span'),
            listBody = Array.from(list.childNodes),
            listHeader = list.firstElementChild,
            customHeader = list.getAttribute('data-header'),
            format = list.getAttribute('data-keepformat'),
            header = document.createElement('div');
      let title,
          keepFormat = (0,_util__WEBPACK_IMPORTED_MODULE_0__.toBool)(format),
          shortName = list.getAttribute('data-shortname');
      listButton.classList.add('modal__button');
      listButton.setAttribute('type', 'button');
      listButton.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].label, 'Open dialog');
      listButtonSpan.classList.add('inline-text');
      listButton.appendChild(listButtonSpan);
      list.appendChild(wrapper);
      (0,_util__WEBPACK_IMPORTED_MODULE_0__.appendAll)(wrapper, listBody);
      wrapper.classList.add(`${bodyClassName}`);

      if (customHeader) {
        title = customHeader;
      } else {
        title = listHeader.innerText;
      }

      if (shortName === null) {
        shortName = listHeader.innerText;
      }

      if (keepFormat) {
        list.insertBefore(listHeader, wrapper);
        listHeader.addEventListener('click', function () {
          createDialog(modal, `${i}`, dialogArray);
        });
      } else {
        listButtonSpan.textContent = listHeader.textContent;
        header.appendChild(listHeader);
        list.insertBefore(listButton, wrapper);
        listButton.addEventListener('click', function () {
          createDialog(modal, `${i}`, dialogArray);
        });
      }

      dialogArray.push({
        title: title,
        body: wrapper.innerHTML,
        topic: dialogTopic,
        shortname: shortName
      });
    }
  });
}
/**
 * function that creates a pop-up dialog, linked to click event in launchModal(modal)
 *
 * @param {HTMLElement} parent - an HTML element with the modal class.
 * @param {number} position - position of the <li> in the <ul>
 * @param {array} dialogArray - array of objects contaning title and body {title:title, body:body} to build dialog pager
 *
 */


function createDialog(parent, position, dialogArray) {
  const slider = (0,_util__WEBPACK_IMPORTED_MODULE_0__.toBool)(parent.getAttribute('data-slider')),
        type = parent.dataset.type;
  const closeBtn = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('button', [{
    label: 'class',
    val: 'dialog__close fas fa-times'
  }, {
    label: 'aria-label',
    val: 'Close modal'
  }]);
  const dialog = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', [{
    label: 'class',
    val: 'dialog'
  }, {
    label: 'data-position',
    val: `${position}`
  }, {
    label: 'data-type',
    val: `${type}`
  }]);
  const bodyWrapper = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', [{
    label: 'class',
    val: 'dialog__content'
  }]);
  const wrapperWrapper = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', [{
    label: 'class',
    val: 'dialog__inner'
  }, {
    label: 'role',
    val: 'role'
  }]);
  const dialogStrapline = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('p', [{
    label: 'class',
    val: 'dialog__strapline'
  }]);
  const dialogTitle = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('p', [{
    label: 'class',
    val: 'dialog__heading'
  }]);
  const dialogBody = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', [{
    label: 'class',
    val: 'dialog__body-copy'
  }]);
  dialogTitle.innerText = dialogArray[position].title;
  dialogBody.innerHTML = dialogArray[position].body;
  dialogStrapline.innerHTML = dialogArray[position].topic;
  bodyWrapper.appendChild(closeBtn);
  bodyWrapper.appendChild(dialogStrapline);
  bodyWrapper.appendChild(dialogTitle);
  bodyWrapper.appendChild(dialogBody);
  wrapperWrapper.appendChild(bodyWrapper);
  dialog.appendChild(wrapperWrapper);
  const main = document.querySelector('main');
  main.appendChild(dialog);
  dialog.addEventListener('keydown', e => {
    if (e.key === escapeKey) {
      e.preventDefault();
      document.body.classList.remove('dialog-in', 'no-scroll');
      trap.deactivate();
      closeDialog(dialog, parent);
    }
  });
  dialog.addEventListener('click', e => {
    if (e.target.classList.contains('dialog')) {
      e.preventDefault();
      e.stopPropagation();
      document.body.classList.remove('dialog-in', 'no-scroll');
      trap.deactivate();
      closeDialog(dialog, parent);
    }
  });
  closeBtn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    closeDialog(dialog, parent);
    document.body.classList.remove('dialog-in', 'no-scroll');
    trap.deactivate();
  });
  trapFocus(dialog);
  document.body.classList.add('dialog-in', 'no-scroll');

  if (slider && dialogArray.length > 1) {
    createControl(dialog, dialogArray);
  }
}
/**
 * function that creates pager button on dialog box
 * this function is triggered by createDialog() if the HTML element with classname modal has data[slider] set to true
 *
 * @param {HTMLElement} dialog - an HTML element created by createDialog()
 * @param {array} dialogArray - array of objects contaning title and body {title:title, body:body} to build dialog pager
 *
 */


function createControl(dialog, dialogArray) {
  let position = parseInt(dialog.getAttribute('data-position'));
  const buttonWrapper = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('div', [{
    label: 'class',
    val: 'dialog__slider-control'
  }]);
  let buttonPrev = controlButton(dialogArray, position, 'left');
  let buttonNext = controlButton(dialogArray, position, 'right');
  buttonNext.addEventListener('click', e => {
    e.preventDefault();
    let pos = buttonNext.getAttribute('data-nextState');
    addDialogEvent(dialog, dialogArray, pos);
  });
  buttonPrev.addEventListener('click', e => {
    e.preventDefault();
    let pos = buttonPrev.getAttribute('data-nextState');
    addDialogEvent(dialog, dialogArray, pos);
  });
  buttonWrapper.appendChild(buttonPrev);
  buttonWrapper.appendChild(buttonNext);
  const dialogContent = dialog.querySelector('.dialog__content');
  dialogContent.appendChild(buttonWrapper);
}
/**
 * function attached to control button (created by function 'createControl()') click event
 * it rerenders title, body, button labels of dialog
 *
 * @param {HTMLElement} dialog - an HTML element created by createDialog()
 * @param {array} dialogArray - array of objects contaning title and body {title:title, body:body} to build dialog pager
 * @param {number} nextState - position of object in dialogArray that will be used to update dialog title, body, and button labels
 *
 */


function addDialogEvent(dialog, dialogArray, nextState) {
  nextState = parseInt(nextState);
  dialog.querySelector('.dialog__heading').innerText = dialogArray[nextState].title;
  dialog.querySelector('.dialog__body-copy').innerHTML = dialogArray[nextState].body;

  if (nextState === 0) {
    dialog.querySelectorAll('button')[1].setAttribute('data-nextstate', `${dialogArray.length - 1}`);
    dialog.querySelectorAll('.dialog__underline-transition')[0].innerText = dialogArray[dialogArray.length - 1].shortname;
    dialog.querySelectorAll('.dialog__underline-transition')[1].innerText = dialogArray[nextState + 1].shortname;
    dialog.querySelectorAll('button')[2].setAttribute('data-nextstate', `${nextState + 1}`);
  } else if (nextState === dialogArray.length - 1) {
    dialog.querySelectorAll('.dialog__underline-transition')[0].innerText = dialogArray[nextState - 1].shortname;
    dialog.querySelectorAll('button')[1].setAttribute('data-nextstate', `${nextState - 1}`);
    dialog.querySelectorAll('.dialog__underline-transition')[1].innerText = dialogArray[0].shortname;
    dialog.querySelectorAll('button')[2].setAttribute('data-nextstate', '0');
  } else {
    dialog.querySelectorAll('.dialog__underline-transition')[0].innerText = dialogArray[nextState - 1].shortname;
    dialog.querySelectorAll('button')[1].setAttribute('data-nextstate', `${nextState - 1}`);
    dialog.querySelectorAll('.dialog__underline-transition')[1].innerText = dialogArray[nextState + 1].shortname;
    dialog.querySelectorAll('button')[2].setAttribute('data-nextstate', `${nextState + 1}`);
  }
}
/**
 * function that creates HTML structure of dialog control buttons
 *
 * @param {array} dialogArray - array of objects contaning title and body {title:title, body:body} to build dialog pager
 * @param {number} position - position of the <li> in the <ul>, used to calculate nextState
 * @param {string} direction - either "left" or "right", this will determine the type of icon being attached to the button
 *
 */


function controlButton(dialogArray, position, direction) {
  const button = document.createElement('button');
  const buttonLabel = document.createElement('span');
  buttonLabel.classList.add('dialog__underline-transition');
  let nextState = checkNextState(dialogArray, position, direction);
  button.setAttribute('data-nextstate', `${nextState}`);

  if (dialogArray[nextState].shortname) {
    buttonLabel.innerText = dialogArray[nextState].shortname;
  } else {
    buttonLabel.innerText = dialogArray[nextState].title;
  }

  const buttonIcon = (0,_util__WEBPACK_IMPORTED_MODULE_0__.createHTMLElement)('span', [{
    label: 'class',
    val: `icon far fa-long-arrow-${direction}`
  }]);

  if (direction === 'left') {
    buttonIcon.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].label, 'previous item');
  } else {
    buttonIcon.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_1__["default"].label, 'next item');
  }

  const buttonLabelWrapper = document.createElement('div');
  buttonLabelWrapper.appendChild(buttonLabel);
  button.appendChild(buttonIcon);
  button.appendChild(buttonLabelWrapper);
  return button;
}
/**
 * function calculates and returns nextState
 * it will be used to create click event of control button
 *
 * @param {array} dialogArray - array of objects contaning title and body {title:title, body:body} to build dialog pager
 * @param {number} position - position of the <li> in the <ul>, used to calculate nextState
 * @param {string} direction - either "left" or "right"
 *
 */


function checkNextState(dialogArray, position, direction) {
  const pos = parseInt(`${position}`);
  let nextState;

  if (pos === 0) {
    if (direction === 'left') {
      nextState = dialogArray.length - 1;
    } else {
      nextState = pos + 1;
    }
  } else if (pos === dialogArray.length - 1) {
    if (direction === 'left') {
      nextState = pos - 1;
    } else {
      nextState = 0;
    }
  } else {
    if (direction === 'left') {
      nextState = pos - 1;
    } else {
      nextState = pos + 1;
    }
  }

  return nextState;
}
/**
 * removes dialog from document
 *
 * @param {HTMLElement} dialog - HTML element created by created by function createDialog()
 * @param {HTMLElement} background - background of dialog
 *
 */


function closeDialog(dialog, modal) {
  const parent = dialog.parentNode;
  parent.removeChild(dialog);

  if (scrollTo && !(0,_util__WEBPACK_IMPORTED_MODULE_0__.verticallyInWindow)(modal)) {
    zenscroll__WEBPACK_IMPORTED_MODULE_3___default().to(modal, scrollDuration);
  }
}

function trapFocus(modal) {
  let modalInner = modal.querySelector('.dialog__inner');
  trap = focus_trap__WEBPACK_IMPORTED_MODULE_2___default()(modalInner, {
    clickOutsideDeactivates: true
  });
  trap.activate();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  launchFn: launchModal,
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/patterns/slider/slider.js":
/*!***************************************!*\
  !*** ./src/patterns/slider/slider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./src/util.js");
/* harmony import */ var _aria_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../aria-attributes */ "./src/aria-attributes.js");






/**
 * Slider
 *
 * @module patterns/slider/slider
 * @author Web Development
 * @copyright City, University of London 2020
 */



const className = 'slider',
      defaultStyle = 'arrows',
      defaultCardsPerRow = 1,
      arrowLeft = 'ArrowLeft',
      arrowRight = 'ArrowRight';
/**
 * This adds a few swipe related events listeners to the "ul" element of sliders
 * 
 * @param  {HTMLElement} slider - The slider ul element.
 * @param  {HTMLElement} controlsWrapper - The nav element containing the slider controls
 */

function addSwipeEvents(slider, controlsWrapper) {
  slider.addEventListener('mousedown', function (e) {
    lock(e, slider);
  });
  slider.addEventListener('touchstart', function (e) {
    lock(e, slider);
  });
  slider.addEventListener('mouseup', function (e) {
    move(e, slider, controlsWrapper);
  });
  slider.addEventListener('touchend', function (e) {
    move(e, slider, controlsWrapper);
  });
}
/**
* For arrow responsive slider. Opimises slide elements for responsive slider on 
* bigger screens by creating a new "ul li" structure containing the slides
* 
* @param  {HTMLElement} slider - The slider "ul" element.
* @param  {Array} slides - an array containing the individual slides as li elements.
* @param  {HTMLElement} controls - The "nav" element containing the controls
* 
*/


function responsiveOptimisation(slides, slider, controls, direction) {
  const responsiveNum = 2; // number of items per slide to display

  let i;
  let d;
  let currentSlide; // This cycles through all the current slides and re-structure the list by creating a "new" which list contains
  // the number of items per slide, as set above (responsiveNum)
  //i.e. 
  //  <ul>
  //      <li> slide 1
  //          <ul>
  //              <li>item 1</li>
  //              <li>item 2</li>
  //          </ul>
  //      </li>
  //
  //      <li> slide 2...item 3 & 4</li>
  //      <li> slide 3...item 5 & 6</li>
  //  </ul>

  for (i = 0; i < slides.length; i += responsiveNum) {
    let liElement = document.createElement('li');
    let ulElement = document.createElement('ul');
    liElement.appendChild(ulElement);

    for (d = 0; d < responsiveNum; d++) {
      if (slides[i + d]) {
        ulElement.appendChild(slides[i + d]);
        let sliderposition = slides[i + d].getAttribute('data-sliderposition');

        if (sliderposition == '0') {
          currentSlide = i + d;
        }

        slides[i + d].classList.remove('slide');
        slides[i + d].removeAttribute('data-sliderposition');
      }
    }

    slider.appendChild(liElement);
  } // Re-map slide items after re-structure


  slides = Array.from(slider.children); // Adds appropriate data attributes to slides

  prepareSlides(slides, Math.floor((currentSlide + direction) / 2));
  slider.setAttribute('data-optimised', 'true'); // Resets pagination during screensize change - not during launch

  if (controls) {
    slides[Math.floor((currentSlide + direction) / 2)].focus();
    controls.querySelector('.slider__indicator__total').innerText = slides.length; //slides.length == 1? controls.querySelector('.slider__indicator__total').innerText=9 : controls.querySelector('.slider__indicator__total').innerText=slides.length;

    controls.querySelector('.slider__indicator__current').innerText = Math.floor((currentSlide + direction) / 2) + 1;
    updateButtonState(slider, controls);
  }

  slider.setAttribute('data-count', slides.length);
  return slides;
}
/**
 * For arrow responsive slider.This reverses the optimasation (re-structure) that was done in
 * the function (responsiveOptimisation) above by creating a "normal" single structure ul list
 * 
 * @param  {HTMLElement} slider - The slider "ul" element.
 * @param  {HTMLElement} controls - The "nav" element containing the controls
 */


function reverseOptimisation(slider, controls, direction, click) {
  //formula for reverse is working
  let slides = Array.from(slider.children);
  let i;
  let currentSlide;
  let adjustment = 0;

  for (i = 0; i < slides.length; i++) {
    let sliderposition = slides[i].getAttribute('data-sliderposition');

    if (sliderposition == '0') {
      currentSlide = i;
    }

    const slidesChildren = Array.from(slides[i].querySelector('ul').children);
    slidesChildren.forEach((slide, n) => {
      slider.appendChild(slide);
    });
    slides[i].remove();
  } // Re-map slide items after re-structure


  slides = Array.from(slider.children); // Edge case for responsive sliders with only 2 items to avoid 'over scroll' in screen size switch over

  if (currentSlide * 2 + (Math.round(direction / 2) + direction) >= slides.length) {
    adjustment = -1;
  } // Assigns data attributes and positioning to slides


  prepareSlides(slides, currentSlide * 2 + Math.round(direction / 2) + direction + adjustment);
  slider.setAttribute('data-optimised', 'false'); // Resets pagination and places focus on first slide

  slides[currentSlide * 2 + (Math.round(direction / 2) + direction) + adjustment].focus();
  controls.querySelector('.slider__indicator__total').innerText = slides.length;
  controls.querySelector('.slider__indicator__current').innerText = currentSlide * 2 + (Math.round(direction / 2) + direction + 1) + adjustment;
  slider.setAttribute('data-count', slides.length);
  updateButtonState(slider, controls);
  return slides;
}
/**
 * Updates buttons for arrow slider
 * 
 * @param  {HTMLElement} slider - The slider element.
 * @param  {HTMLElement} controls - The slider controls element.
 */


function updateButtonState(slider, controls) {
  // Disables "next" or "prev" buttons if on first or last slide
  const nextButton = controls.querySelector(`.${className}__controls__next`),
        prevButton = controls.querySelector(`.${className}__controls__prev`);
  slider.querySelector('[data-sliderposition="-1"]') ? prevButton.removeAttribute('disabled') : prevButton.setAttribute('disabled', true);
  slider.querySelector('[data-sliderposition="1"]') ? nextButton.removeAttribute('disabled') : nextButton.setAttribute('disabled', true);
  slider.removeAttribute('disabled'); // Responsive slider edge case for when 2 items to allow next arrow to be clicable to allow switch over

  const responsive = slider.getAttribute('data-style');
  let slides = Array.from(slider.children);
  responsive && slides.length == 1 ? nextButton.removeAttribute('disabled') : null;
}
/**
 * Handle clicks on the next/previous buttons for arrow slider.
 *
 * @param  {HTMLElement} slider - The slider element.
 * @param  {Number} direction - The scroll direction, 1 = next, -1 = previous.
 */


function handleNextPrevClick(slider, controls, direction) {
  let slides = Array.from(slider.children);
  const responsive = slider.getAttribute('data-style');
  const optimised = slider.getAttribute('data-optimised');
  let screenSize = window.innerWidth; // This is for responsive slider only, checking if re-structuring is necesssary in case the viewport size changed.

  if (responsive === 'responsive' && screenSize < 768 && optimised == 'true') {
    reverseOptimisation(slider, controls, direction, true);
    return;
  } else if (responsive === 'responsive' && screenSize >= 768 && optimised !== 'true') {
    responsiveOptimisation(slides, slider, controls, direction);
    return;
  }

  const current = slider.querySelector('[data-sliderposition="0"]'),
        currentPage = controls.querySelector(`.${className}__indicator__current`),
        nextButton = controls.querySelector(`.${className}__controls__next`),
        prevButton = controls.querySelector(`.${className}__controls__prev`); // Next arrow clicked

  if (direction === 1) {
    const next = current.nextElementSibling;

    if (next) {
      // Disables buttons during slide animation from current to next
      nextButton.setAttribute('disabled', true);
      prevButton.setAttribute('disabled', true); // Move focus to next slide, wait for transition to finish

      next.addEventListener('transitionend', function focusNext() {
        next.removeEventListener('transitionend', focusNext, true);
        next.focus();
        updateButtonState(slider, controls);
      }, true); // Hide current slide once transition has finished

      current.addEventListener('transitionend', function hideCurrent() {
        current.removeEventListener('transitionend', hideCurrent, true);
        current.dataset.hidden = true;
        current.dataset.smallhidden = true;
      }, true); // Updates position of slides
      // Moves current slide to back to previous position

      current.dataset.sliderposition = -1;
      current.dataset.smallposition = -1; // Sets 'active' current slide

      next.dataset.hidden = false;
      next.dataset.smallhidden = false;
      next.dataset.sliderposition = 0;
      next.dataset.smallposition = 0; // Updates pagination to current slide position

      currentPage.innerText = slides.indexOf(next) + 1;
    }
  } else {
    // Previous arrow clicked
    const previous = current.previousElementSibling;

    if (previous) {
      nextButton.setAttribute('disabled', true);
      prevButton.setAttribute('disabled', true);
      previous.addEventListener('transitionend', function focusPrevious() {
        previous.removeEventListener('transitionend', focusPrevious, true);
        previous.focus();
        updateButtonState(slider, controls);
      }, true);
      current.addEventListener('transitionend', function hideCurrent() {
        current.removeEventListener('transitionend', hideCurrent, true);
        current.dataset.hidden = true;
        current.dataset.smallhidden = true;
      }, true); // Updates position of slides
      // Moves current slide forward to next position

      current.dataset.sliderposition = 1;
      current.dataset.smallposition = 1; // Sets current / active slide

      previous.dataset.hidden = false;
      previous.dataset.smallhidden = false;
      previous.dataset.sliderposition = 0;
      previous.dataset.smallposition = 0; // Updates pagination to current slide

      currentPage.innerText = slides.indexOf(previous) + 1;
    }
  } // Set the height of the slider container to be fixed. This fixes the issue of having 'arrow navigation'
  //slideHeightFix(slider);

}
/**
 * This is for arrow slider only. It applies the necessary data attribues needed
 *  for the functionality of the slider which positions the slides into their starting positions
 * 
 * @param  {Array} slides - an array containing the individual slides as li elements
 */


function prepareSlides(slides, current) {
  slides.forEach((slide, i) => {
    slide.setAttribute('tabindex', -1); // Remove inactive

    slide.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].label, `Slide ${i + 1} of ${slides.length}`); // Accesiblity

    slide.classList.add('slide'); // Add slide class of slide
    // 0 = active / first slide

    if (i === current) {
      slide.dataset.sliderposition = 0;
      slide.dataset.smallposition = 0;
      slide.dataset.hidden = false;
    } else if (i > current) {
      // 1 = next slide
      slide.dataset.sliderposition = 1;
      slide.dataset.smallposition = 1;
      slide.dataset.hidden = 'true';
      slide.dataset.smallhidden = 'true';
    } else {
      slide.dataset.sliderposition = -1;
      slide.dataset.smallposition = -1;
      slide.dataset.hidden = true; // @ WR review smallhidden - what was intended by it?
    }
  });
  return slides;
}
/**
 * Transform an element with the slider class name into a slider section controlled by arrows.
 *
 * @param {HTMLElement} slider - An element with the slider class
 * 
 */


function launchArrow(slider) {
  // creates elements for pagination and controls
  let slides = Array.from(slider.children);
  const controlsWrapper = document.createElement('nav'),
        nextButton = document.createElement('button'),
        nextButtonSpan = document.createElement('span'),
        prevButton = document.createElement('button'),
        prevButtonSpan = document.createElement('span'),
        indicator = document.createElement('div'),
        currentPage = document.createElement('span'),
        totalPages = document.createElement('span'),
        divider = document.createElement('span'),
        dividerVisible = document.createElement('span'),
        dividerScreenReader = document.createElement('span'); // If not enough slides, don't create it.

  if (1 >= slides.length) {
    (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeClass)(slider, className, false);
    return;
  } // Reconstructs slides for responsive slider


  const responsive = slider.getAttribute('data-style');
  let screenSize = window.innerWidth;

  if (responsive === 'responsive' && screenSize >= 768) {
    responsiveOptimisation(slides, slider); // Re-map slide items after re-structure

    slides = Array.from(slider.children);
  }

  ; // Sets up the positions of the cards / slides

  prepareSlides(slides, 0); // Build the next button

  nextButtonSpan.appendChild(document.createTextNode('Next slide'));
  nextButton.appendChild(nextButtonSpan);
  nextButton.setAttribute('type', 'button');
  nextButton.className = className + '__controls__next'; // Wait for Click on next button

  nextButton.addEventListener('click', () => handleNextPrevClick(slider, controlsWrapper, 1), true); // Build the previous button

  prevButtonSpan.appendChild(document.createTextNode('Previous slide'));
  prevButton.appendChild(prevButtonSpan);
  prevButton.setAttribute('type', 'button');
  prevButton.setAttribute('disabled', 'true');
  prevButton.className = className + '__controls__prev'; // Wait for Click on previous button

  prevButton.addEventListener('click', () => handleNextPrevClick(slider, controlsWrapper, -1), true); // Accessiblity wait for key press anywhere within slider

  slider.addEventListener('keydown', e => {
    switch (e.key) {
      case arrowLeft:
        prevButton.click();
        break;

      case arrowRight:
        nextButton.click();
        break;

      default:
        break;
    }
  }, true); // apply CSS to card which is currently visible

  currentPage.appendChild(document.createTextNode(1)); // default is 1 when page loads

  currentPage.className = className + '__indicator__current'; // Divider between 1 / 4 etc.

  dividerVisible.appendChild(document.createTextNode('/'));
  dividerVisible.className = className + '__indicator__divider--visible';
  dividerVisible.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].hidden, 'true');
  dividerScreenReader.appendChild(document.createTextNode(' of '));
  dividerScreenReader.className = className + '__indicator__divider--sr';
  divider.appendChild(dividerVisible);
  divider.appendChild(dividerScreenReader);
  divider.className = className + '__indicator__divider'; // Total pages

  totalPages.className = className + '__indicator__total';
  totalPages.appendChild(document.createTextNode(slides.length)); // Add to page

  indicator.appendChild(currentPage);
  indicator.appendChild(divider);
  indicator.appendChild(totalPages);
  indicator.className = className + '__indicator'; // Wrap element around slider__controls

  controlsWrapper.appendChild(indicator);
  controlsWrapper.appendChild(prevButton);
  controlsWrapper.appendChild(nextButton);
  controlsWrapper.className = className + '__controls';
  controlsWrapper.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].label, 'Slider navigation'); // Places controls directly after 'ul' containing the slides

  slider.nextElementSibling ? slider.parentElement.insertBefore(controlsWrapper, slider.nextElementSibling) : slider.parentElement.appendChild(controlsWrapper); // Add event listeners

  addSwipeEvents(slider, controlsWrapper); // Set the height of the slider container to be fixed. This fixes the issue of having 'arrow navigation'
  //slideHeightFix(slider);
}

;
/**
 * Transform an element with the slider class name into a slider section controlled by dots.
 * This is to be launched on smaller screens only.
 *
 * @param {HTMLElement} slider - An element with the slider class
 * 
 */

function launchDot(slider) {
  // Creates pagination and control elements
  const slides = Array.from(slider.children),
        controlsWrapper = document.createElement('nav'); // If not enough slides, don't create it.

  if (1 >= slides.length) {
    (0,_util__WEBPACK_IMPORTED_MODULE_3__.removeClass)(slider, className, false);
    return;
  }

  slides.forEach((slide, i) => {
    slide.setAttribute('tabindex', -1); // Remove inactive

    slide.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].label, `Slide ${i + 1} of ${slides.length}`); // Accesiblity

    slide.classList.add('slide'); // Add slide class of slide
    // Sets data attributes for slides which controls their position within slide collection

    if (i === 0) {
      slide.dataset.sliderposition = 0; // 0 for active slide

      slide.dataset.smallposition = 0;
      slide.dataset.hidden = false;
    } else {
      slide.dataset.sliderposition = 1; // 1 for 'next' slide

      slide.dataset.smallposition = 1;
      slide.dataset.hidden = 'true';
      slide.dataset.smallhidden = 'true';
    } // Creates dot buttons for each slide


    let dot = (0,_util__WEBPACK_IMPORTED_MODULE_3__.createHTMLElement)('button', [{
      label: 'data-page',
      val: i
    }, {
      label: 'aria-label',
      val: `Open slide ${i + 1}`
    }, {
      label: 'type',
      val: 'button'
    }]);

    if (i === 0) {
      // Active slide
      dot.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].current, 'slide');
      dot.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].expanded, 'true');
      dot.setAttribute('disabled', 'true');
    } else {
      // All other slides
      dot.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].expanded, 'false');
    }

    dot.addEventListener('click', () => handleDotClick(slider, controlsWrapper, i), true);
    controlsWrapper.appendChild(dot);
  }); // Accessiblity wait for key press anywhere within slider

  slider.addEventListener('keydown', e => {
    const current = slider.querySelector('[data-sliderposition="0"]');
    const next = current.nextElementSibling;
    const previous = current.previousElementSibling;
    const pos = slides.indexOf(current);
    const buttons = Array.from(controlsWrapper.children);

    switch (e.key) {
      case arrowLeft:
        if (previous) {
          buttons[pos - 1].click();
        }

        break;

      case arrowRight:
        if (next) {
          buttons[pos + 1].click();
        }

        ;
        break;

      default:
        break;
    }
  }, true); // Wrap element around slider__controls

  controlsWrapper.className = className + '__controls';
  controlsWrapper.setAttribute(_aria_attributes__WEBPACK_IMPORTED_MODULE_4__["default"].label, 'Slider navigation'); // Places controls directly after 'ul' containing the slides

  slider.nextElementSibling ? slider.parentElement.insertBefore(controlsWrapper, slider.nextElementSibling) : slider.parentElement.appendChild(controlsWrapper); //add event listeners

  addSwipeEvents(slider, controlsWrapper); // Set the height of the slider container to be fixed. This fixes the issue of having 'arrow navigation'
  //slideHeightFix(slider);
}
/**
 * Handle clicks for dot slider
 *
 * @param  {HTMLElement} slider - The slider element.
 * @param  {Number} selection - pass the paramaetr of selected slide as a number
 * @param  {HTMLElement} controlsWrapper - Element containing the control buttons
 */


function handleDotClick(slider, controlsWrapper, selection) {
  const slides = Array.from(slider.children),
        dotButtons = Array.from(controlsWrapper.children); // Disables all buttons after click to avoid multiple clicks

  dotButtons.forEach((dot, i) => {
    dot.setAttribute('disabled', true);
  }); // Re-arranges the positions of the slides

  slides.forEach((slide, i) => {
    // Cycles through slides and makes active the one 'selected'
    if (i === selection) {
      slide.dataset.sliderposition = 0;
      slide.dataset.smallposition = 0;
      slide.dataset.hidden = false;
      slide.addEventListener('transitionend', function focusNext() {
        slide.removeEventListener('transitionend', focusNext, true);
        slide.focus();
        updateDotButtonState(i, dotButtons, slider);
      }, true);
    } // Places slides 'after' current slide in next position
    else if (i > selection) {
      slide.dataset.sliderposition = 1;
      slide.dataset.smallposition = 1;
      slide.dataset.hidden = true; // @ WR review smallhidden - what was intended by it?
    } // Places slides 'before' current slide in previous position
    else {
      slide.dataset.sliderposition = -1;
      slide.dataset.smallposition = -1;
      slide.dataset.hidden = true; // @ WR review smallhidden - what was intended by it?
    }
  }); // Set the height of the slider container to be fixed. This fixes the issue of having 'arrow navigation'
  //slideHeightFix(slider);
}
/**
 * @param  {number} active - This is the number/index of the 'active' slide.
 * @param  {array} dotButtons - An array of all the dot buttons.
 */


function updateDotButtonState(active, dotButtons, slider) {
  dotButtons.forEach((dot, i) => {
    if (i === active) {
      dot.setAttribute('disabled', true);
      dot.setAttribute('aria-expanded', true);
    } else {
      dot.removeAttribute('disabled');
      dot.setAttribute('aria-expanded', false);
    }
  });
  slider.removeAttribute('disabled');
}
/**
 * This function creates a fix height for the slider container so the height don't change depending on each 
 * slides individual height which would cause the navigation arrows to move up and down when adjusting to the 
 * height of the current slide
 * @param  {HTMLElement} slider - The slider element.
 */


function slideHeightFix(slider) {
  let slides = Array.from(slider.children);
  let sliderSetHeight = 0;
  slider.style.minHeight = '0px';
  slides.forEach(slide => {
    let slideHeight = slide.offsetHeight;
    slideHeight > sliderSetHeight ? sliderSetHeight = slideHeight : null;
  });
  slider.style.minHeight = sliderSetHeight + 'px';
}

;
/**
 * 3 Swipe functions below. Unify records touch coordinates to determine left or right swipe.
 * Lock function locks the ul element to prevent too many additional touches interfering with the sliding 
 * functionality. I.e. when a slide is in progress it locks it not to register additional touches.
 * Move function monitors the 'end' of the swipe action to determine the direction of the swipe i.e. left / right.
 * The "dx" parameter can be used to adjust the sensitivity of the swiping. The larger the number the longer the swipe needs
 * to be to register as an actual swipe.
 *
 * @param {event} e - Touch event
 * @param {HTMLElement} Slider - The ul element containing the "li" slides
 * @param {HTMLElement} ControlsWrapper - The nav element containing the slider controls
 */

let x0;

function unify(e) {
  return e.changedTouches ? e.changedTouches[0] : e;
}

function lock(e, slider) {
  const locked = slider.getAttribute('disabled');

  if (!locked) {
    x0 = unify(e).clientX; //set mousedown clientX value
    //e.target.classList.toggle('smooth', !(this.locked = true));
  }
}

;

function move(e, slider, controlsWrapper) {
  const locked = slider.getAttribute('disabled');
  let currentSlide = slider.querySelector("li[data-hidden=false]");
  const sliderType = slider.getAttribute('data-style');

  function getElementIndex(element) {
    return [...element.parentNode.children].indexOf(element);
  }

  ;

  if (!locked) {
    let dx = unify(e).clientX - x0,
        //dx is value calculate by using clientX mousedown and after value
    s = Math.sign(dx),
        //check if swipe is left or right by checking value is negative or positive
    tx = getComputedStyle(e.target).getPropertyValue('--tx'),
        p = parseInt(tx.replace(/\D/g, '')); // May use the drag length as a condition to move slider
    // Next slide

    if (s == -1 && currentSlide.nextElementSibling && dx < -25) {
      // Checks which type of slider you are using and handles slide
      slider.setAttribute('disabled', true);
      sliderType == 'arrows' || sliderType === 'responsive' ? handleNextPrevClick(slider, controlsWrapper, 1) : handleDotClick(slider, controlsWrapper, getElementIndex(currentSlide) + 1);
    } // Previous slide 
    else if (s == 1 && currentSlide.previousElementSibling && dx > 25) {
      // Checks which type of slider you are using and handles slide
      slider.setAttribute('disabled', true);
      sliderType == 'arrows' || sliderType === 'responsive' ? handleNextPrevClick(slider, controlsWrapper, -1) : handleDotClick(slider, controlsWrapper, getElementIndex(currentSlide) - 1);
    }
  }
} // End of swipe functions

/**
 * Transform an element with the slider class name into a slider section.
 * 
 * @param {HTMLElement} slider - An element with the slider class
 */


function launchSlider(slider) {
  const style = slider.dataset.style || defaultStyle,
        cardsPerRow = parseInt(slider.dataset.cardsperrow) || defaultCardsPerRow; // CardsPerRow not currently in use. Tom's old code. 
  // Might have use case for bigger screen which have capacity to have more than 1 item per slide.

  switch (style) {
    case 'arrows':
      launchArrow(slider, cardsPerRow);
      break;

    case 'responsive':
      launchArrow(slider, cardsPerRow);
      break;

    case 'dots':
      launchDot(slider, cardsPerRow);
      break;

    default:
      launchArrow(slider, cardsPerRow);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  launchFn: launchSlider,
  launchQuery: `.${className}`
});

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeClass": () => (/* binding */ removeClass),
/* harmony export */   "parametersToObject": () => (/* binding */ parametersToObject),
/* harmony export */   "objectToParameters": () => (/* binding */ objectToParameters),
/* harmony export */   "gaEvent": () => (/* binding */ gaEvent),
/* harmony export */   "detectIE": () => (/* binding */ detectIE),
/* harmony export */   "checkIntersectionObserver": () => (/* binding */ checkIntersectionObserver),
/* harmony export */   "createHTMLElement": () => (/* binding */ createHTMLElement),
/* harmony export */   "reduceMotion": () => (/* binding */ reduceMotion),
/* harmony export */   "verticallyInWindow": () => (/* binding */ verticallyInWindow),
/* harmony export */   "appendAll": () => (/* binding */ appendAll),
/* harmony export */   "toBool": () => (/* binding */ toBool)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);





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
 * Append an array of elements to an element.
 *
 * @param {HTMLElement} elem - The parent element.
 * @param {HTMLElement[]} children - An array of elements to append to it.
 */

function appendAll(elem, children) {
  children.forEach(child => elem.appendChild(child));
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

/***/ }),

/***/ "./node_modules/tabbable/index.js":
/*!****************************************!*\
  !*** ./node_modules/tabbable/index.js ***!
  \****************************************/
/***/ ((module) => {

var candidateSelectors = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
];
var candidateSelector = candidateSelectors.join(',');

var matches = typeof Element === 'undefined'
  ? function () {}
  : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function tabbable(el, options) {
  options = options || {};

  var regularTabbables = [];
  var orderedTabbables = [];

  var candidates = el.querySelectorAll(candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var i, candidate, candidateTabindex;
  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate)) continue;

    candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(sortOrderedTabbables)
    .map(function(a) { return a.node })
    .concat(regularTabbables);

  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node) {
  if (
    !isNodeMatchingSelectorFocusable(node)
    || isNonTabbableRadio(node)
    || getTabindex(node) < 0
  ) {
    return false;
  }
  return true;
}

function isTabbable(node) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node);
}

function isNodeMatchingSelectorFocusable(node) {
  if (
    node.disabled
    || isHiddenInput(node)
    || isHidden(node)
  ) {
    return false;
  }
  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
function isFocusable(node) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr;
  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true;
  // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.
  var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

function isHidden(node) {
  // offsetParent being null will allow detecting cases where an element is invisible or inside an invisible element,
  // as long as the element does not use position: fixed. For them, their visibility has to be checked directly as well.
  return node.offsetParent === null || getComputedStyle(node).visibility === 'hidden';
}

module.exports = tabbable;


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/***/ ((module) => {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 			"main": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["core","vendor-direct"], () => (__webpack_require__("./src/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map