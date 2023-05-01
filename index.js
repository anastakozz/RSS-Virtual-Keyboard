import {init} from './js/basicHtmlGenerator.js';
import {generateKeys} from './js/generateKeys.js';
import {keyLayoutEn} from './js/keyLayouts.js';
import {keyLayoutRu} from './js/keyLayouts.js';
import { highliteKeys } from './js/highliteKeys.js';

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
        p: null
    },

    properties: {
        value: '',
        cupsLock: false,
        enLanguage: false,
        shift: false
    }
}



//generate layout
init(VirtualKeyboard);
const keyboard = document.querySelector('.keyboard');

//check language and generate keyboard
const checkAndGenerate = () => {
    let layout = VirtualKeyboard.properties.enLanguage ? keyLayoutEn : keyLayoutRu;
    let fragment = generateKeys(layout, VirtualKeyboard);
    //append the keyboard
    keyboard.append(fragment);
    VirtualKeyboard.elements.keys = VirtualKeyboard.elements.keyboard.querySelectorAll('.key');
}
// add Ctrl + Shift language switcher
const switchLanguages = () => {
    let active = new Set();
    document.addEventListener('keydown', function(event) {
        active.add(event.key);
        
        if(!active.has('Control') || !active.has('Shift')) {
            return;
        }
        VirtualKeyboard.properties.enLanguage = !VirtualKeyboard.properties.enLanguage;
        active.clear();
        keyboard.innerHTML = '';
        checkAndGenerate();
    })
    document.addEventListener('keyup', function(event) {
        active.delete(event.key);
      });
}


checkAndGenerate();
switchLanguages();
highliteKeys(VirtualKeyboard);

//