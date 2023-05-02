/* eslint-disable import/extensions */
import init from './script/basicHtmlGenerator.js';
import { generateKeys } from './script/generateKeys.js';
import { keyLayoutEn, keyLayoutRu } from './script/keyLayouts.js';
import highliteKeys from './script/highliteKeys.js';

/* eslint-enable import/extensions */
// //set locale storage
// function setLocalStorage() {
//     localStorage.setItem('language', VirtualKeyboard.properties.enLanguage);
// }
// window.addEventListener('beforeunload', setLocalStorage)

// function getLocalStorage() {
//     if(localStorage.getItem('language')) {
//         VirtualKeyboard.properties.enLanguage = localStorage.getItem('language');
//     }
// }
// window.addEventListener('load', getLocalStorage);

const VirtualKeyboard = {
  elements: {
    main: null,
    wrapper: null,
    heading: null,
    textarea: null,
    keyboard: null,
    keys: [],
    p: null,
  },

  properties: {
    value: '',
    cupsLock: false,
    enLanguage: false,
    shift: false,
  },
};

// generate layout
init(VirtualKeyboard);
const keyboard = document.querySelector('.keyboard');

// check language and generate keyboard
const checkAndGenerate = () => {
  const layout = VirtualKeyboard.properties.enLanguage ? keyLayoutEn : keyLayoutRu;
  const fragment = generateKeys(layout, VirtualKeyboard);
  // append the keyboard
  keyboard.append(fragment);
  VirtualKeyboard.elements.keys = VirtualKeyboard.elements.keyboard.querySelectorAll('.key');
};
// add Ctrl + Shift language switcher
const switchLanguages = () => {
  const active = new Set();
  document.addEventListener('keydown', (event) => {
    active.add(event.key);

    if (!active.has('Control') || !active.has('Shift')) {
      return;
    }
    VirtualKeyboard.properties.enLanguage = !VirtualKeyboard.properties.enLanguage;
    active.clear();
    keyboard.innerHTML = '';
    checkAndGenerate();
  });
  document.addEventListener('keyup', (event) => {
    active.delete(event.key);
  });
};

checkAndGenerate();
switchLanguages();
highliteKeys(VirtualKeyboard);

//
