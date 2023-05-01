
 //create html for an icon
 const createIcon = (icon) => {
    return `<i class="material-icons">${icon}</i>`;
 }

// toggle cupslock
const toggleCups = (board) => {
    board.properties.capsLock = !board.properties.capsLock;
    for (const key of board.elements.keys) {
        if (key.childElementCount === 0 && key.textContent !== 'esc' && key.textContent !== 'ctrl') {
            key.textContent = board.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
        }
    }
}




//generate keys
const generateKeys = (layout, board) => {

const keyboardFragment = document.createDocumentFragment();
const lineBreak = ['backspace', 'keyboard_return', 'shift','\\', 'ё']
board.properties.capsLock = false;


layout.forEach(key => {
    const keyItem = document.createElement('button');
    keyItem.setAttribute('type', 'button');
    keyItem.classList.add('key');

    switch (key) {


        case 'backspace':
            keyItem.classList.add('key-wide', 'key-functional', 'Backspace');
            keyItem.innerHTML = createIcon('backspace');
            keyItem.addEventListener('click', () => {
                board.elements.textarea.value = board.elements.textarea.value.substring(0, board.elements.textarea.value.length - 1);
                // board.elements.textarea.value += '\b';
            })
        break;

        case 'keyboard_tab':
            keyItem.classList.add('key-wide', 'key-functional', 'Tab');
            keyItem.innerHTML = createIcon('keyboard_tab');
            keyItem.addEventListener('click', () => {
                board.elements.textarea.value += '  ';
            })
        break;

        case 'keyboard_return':
            keyItem.classList.add('key-wide', 'key-functional', 'Enter');
            keyItem.innerHTML = createIcon('keyboard_return');

            keyItem.addEventListener('click', () => {
                board.elements.textarea.value += '\n';
            })
        break;

        case 'keyboard_capslock':
            keyItem.classList.add('key-wide', 'key-functional', 'key-activating', 'CapsLock');
            keyItem.innerHTML = createIcon('keyboard_capslock');

            keyItem.addEventListener('click', () => {
                toggleCups(board);
                keyItem.classList.toggle('key-activated', board.properties.capsLock);
            });
            
        break;

        case 'shift':
            keyItem.classList.add('key-functional', 'ShiftRight', 'ShiftLeft');
            keyItem.innerHTML = createIcon('arrow_upward');
        break;

        case 'keyboard_option_key':
            keyItem.classList.add('key-functional', 'AltLeft', 'AltRight');
            keyItem.innerHTML = createIcon('keyboard_option_key');
        break;

        case 'keyboard_command_key':
            keyItem.classList.add('key-functional', 'MetaLeft', 'MetaRight');
            keyItem.innerHTML = createIcon('keyboard_command_key');
        break;

        case 'space_bar':
            keyItem.classList.add('key-x-wide','key-functional', 'Space');
            keyItem.innerHTML = createIcon('space_bar');
            keyItem.addEventListener('click', () => {
                board.elements.textarea.value += ' ';
            })
        break;

        case 'keyboard_arrow_left':
            keyItem.classList.add('key-functional', 'ArrowLeft');
            keyItem.innerHTML = createIcon('keyboard_arrow_left');
            keyItem.addEventListener('click', () => {
                board.elements.textarea.value += "\u2190";
            })
        break;

        case 'keyboard_arrow_right':
            keyItem.classList.add('key-functional', 'ArrowRight');
            keyItem.innerHTML = createIcon('keyboard_arrow_right');
            keyItem.addEventListener('click', () => {
                board.elements.textarea.value += "\u2192";
            })
        break;

        case 'keyboard_arrow_up':
            keyItem.classList.add('key-functional', 'ArrowUp');
            keyItem.innerHTML = createIcon('keyboard_arrow_up');
            keyItem.addEventListener('click', () => {
                board.elements.textarea.value += "\u2191";
            })
        break;

        case 'keyboard_arrow_down':
            keyItem.classList.add('key-functional', 'ArrowDown');
            keyItem.innerHTML = createIcon('keyboard_arrow_down');
            keyItem.addEventListener('click', () => {
                board.elements.textarea.value += "\u2193";
            })
        break;

        case 'ctrl':
            keyItem.textContent = key.toLowerCase();
            keyItem.classList.add('key-functional', 'ControlLeft', 'ControlRight');
        break;

        case 'esc':
            keyItem.textContent = key.toLowerCase();
            keyItem.classList.add('key-functional', 'Escape');
        break;

        case '§':
            keyItem.textContent = key;
            keyItem.classList.add( 'Backquote');
        break;

        case '>':
            keyItem.textContent = key;
            keyItem.classList.add( 'Backquote');
        break;

        case '-':
            keyItem.textContent = key;
            keyItem.classList.add('Minus');
        break;

        case '=':
            keyItem.textContent = key;
            keyItem.classList.add( 'Equal');
        break;

        case '[':
            keyItem.textContent = key;
            keyItem.classList.add('BracketLeft');
        break;

        case 'х':
            keyItem.textContent = key.toLowerCase();
            keyItem.classList.add('BracketLeft');
        break;

        case ']':
            keyItem.textContent = key;
            keyItem.classList.add('BracketRight');
        break;

        case 'ъ':
            keyItem.textContent = key.toLowerCase();
            keyItem.classList.add('BracketRight');
        break;

        case '`':
            keyItem.textContent = key;
            keyItem.classList.add('IntlBackslash');
        break;

        case '~':
            keyItem.textContent = key;
            keyItem.classList.add('IntlBackslash');
        break;

        case ',':
            keyItem.textContent = key;
            keyItem.classList.add('Comma');
        break;

        case 'б':
            keyItem.textContent = key.toLowerCase();
            keyItem.classList.add('Comma');
        break;

        case 'ю':
            keyItem.textContent = key.toLowerCase();
            keyItem.classList.add('Period');
        break;

        case '.':
            keyItem.textContent = key;
            keyItem.classList.add('Period');
        break;

        case '/':
            keyItem.textContent = key;
            keyItem.classList.add('Slash');
        break;

        case '\\':
            keyItem.textContent = key;
            keyItem.classList.add('Backslash');
        break;

        case 'ё':
            keyItem.textContent = key.toLowerCase();
            keyItem.classList.add('Backslash');
        break;

        case '\'':
            keyItem.textContent = key;
            keyItem.classList.add('Quote');
        break;

        case 'э':
            keyItem.textContent = key.toLowerCase();
            keyItem.classList.add('Quote');
        break;

        case ';':
            keyItem.textContent = key;
            keyItem.classList.add('Semicolon');
        break;

        case 'ж':
            keyItem.textContent = key.toLowerCase();
            keyItem.classList.add('Semicolon');
        break;

        case '0': 
        case '1': 
        case '2': 
        case '3': 
        case '4': 
        case '5': 
        case '6': 
        case '7': 
        case '8': 
        case '9': 
            keyItem.textContent = key;
            keyItem.classList.add(`Digit${key[key.length - 1]}`);
            keyItem.addEventListener('click', () => {
                board.elements.textarea.value += board.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
            })
        break


        default:
            keyItem.textContent = key.toLowerCase();
            keyItem.classList.add(key[key.length - 1]);
            keyItem.addEventListener('click', () => {
                board.elements.textarea.value += board.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
            })
    }
    keyboardFragment.appendChild(keyItem);
    if (lineBreak.includes(key)){
        keyboardFragment.appendChild(document.createElement("br"));
    }


})
return keyboardFragment;
}



export {generateKeys};
export {toggleCups};