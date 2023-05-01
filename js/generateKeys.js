
 //create html for an icon
 const createIcon = (icon) => {
    return `<i class="material-icons">${icon}</i>`;
 }

// toggle cupslock
const toggleCups = (board) => {
    board.properties.capsLock = !board.properties.capsLock;
    for (const key of board.elements.keys) {
        if (key.childElementCount === 0 && key.textContent !== 'fn' && key.textContent !== 'ctrl') {
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
            keyItem.classList.add('key-wide', 'key-functional');
            keyItem.innerHTML = createIcon('backspace');
            keyItem.addEventListener('click', () => {
                board.elements.textarea.value = board.elements.textarea.value.substring(0, board.elements.textarea.value.length - 1);
                // board.elements.textarea.value += '\b';
            })
        break;

        case 'keyboard_tab':
            keyItem.classList.add('key-wide', 'key-functional');
            keyItem.innerHTML = createIcon('keyboard_tab');
            keyItem.addEventListener('click', () => {
                board.elements.textarea.value += '  ';
            })
        break;

        case 'keyboard_return':
            keyItem.classList.add('key-wide', 'key-functional');
            keyItem.innerHTML = createIcon('keyboard_return');

            keyItem.addEventListener('click', () => {
                board.elements.textarea.value += '\n';
            })
        break;

        case 'keyboard_capslock':
            keyItem.classList.add('key-wide', 'key-functional', 'key-activating');
            keyItem.innerHTML = createIcon('keyboard_capslock');

            keyItem.addEventListener('click', () => {
                toggleCups(board);
                keyItem.classList.toggle('key-activated', board.properties.capsLock);
            });
            
        break;

        case 'shift':
            keyItem.classList.add('key-functional');
            keyItem.innerHTML = createIcon('arrow_upward');
        break;

        case 'keyboard_option_key':
            keyItem.classList.add('key-functional');
            keyItem.innerHTML = createIcon('keyboard_option_key');
        break;

        case 'keyboard_command_key':
            keyItem.classList.add('key-functional');
            keyItem.innerHTML = createIcon('keyboard_command_key');
        break;

        case 'space_bar':
            keyItem.classList.add('key-x-wide','key-functional');
            keyItem.innerHTML = createIcon('space_bar');
            keyItem.addEventListener('click', () => {
                board.elements.textarea.value += ' ';
            })
        break;

        case 'keyboard_arrow_left':
            keyItem.classList.add('key-functional');
            keyItem.innerHTML = createIcon('keyboard_arrow_left');
            keyItem.addEventListener('click', () => {
                board.elements.textarea.value += "\u2190";
            })
        break;

        case 'keyboard_arrow_right':
            keyItem.classList.add('key-functional');
            keyItem.innerHTML = createIcon('keyboard_arrow_right');
            keyItem.addEventListener('click', () => {
                board.elements.textarea.value += "\u2192";
            })
        break;

        case 'keyboard_arrow_up':
            keyItem.classList.add('key-functional');
            keyItem.innerHTML = createIcon('keyboard_arrow_up');
            keyItem.addEventListener('click', () => {
                board.elements.textarea.value += "\u2191";
            })
        break;

        case 'keyboard_arrow_down':
            keyItem.classList.add('key-functional');
            keyItem.innerHTML = createIcon('keyboard_arrow_down');
            keyItem.addEventListener('click', () => {
                board.elements.textarea.value += "\u2193";
            })
        break;

        case 'fn':
            keyItem.textContent = key.toLowerCase();
            keyItem.classList.add('key-functional');
        break;

        case 'ctrl':
            keyItem.textContent = key.toLowerCase();
            keyItem.classList.add('key-functional');
        break;

        default:
            keyItem.textContent = key.toLowerCase();
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