import {init} from './js/basicHtmlGenerator.js';
import {generateKeys} from './js/generateKeys.js';
import {keyLayoutEn} from './js/keyLayouts.js';





const VirtualKeyboard = {
    elements: {
        main: null,
        wrapper: null,
        heading: null,
        textarea: null,
        keyboard: null,
        keys: []
    },

    properties: {
        value: ''
    }
}


init(VirtualKeyboard);
const keyboard = document.querySelector('.keyboard');

let fragment = generateKeys(keyLayoutEn);

keyboard.append(fragment);
