
 //create html for an icon
 const createIcon = (icon) => {
    return `<i class="material-icons">${icon}</i>`;
 }

const generateKeys = (layout) => {

const keyboardFragment = document.createDocumentFragment();
const lineBreak = ['backspace', 'keyboard_return', 'shift']
//generate keys
layout.forEach(key => {
    const keyItem = document.createElement('button');
    keyItem.setAttribute('type', 'button');
    keyItem.classList.add('key');

    switch (key) {
        case 'backspace':
            keyItem.classList.add('key-wide');
            keyItem.innerHTML = createIcon('backspace');
        break;

        case 'keyboard_tab':
            keyItem.classList.add('key-wide');
            keyItem.innerHTML = createIcon('keyboard_tab');
        break;

        case 'keyboard_return':
            keyItem.classList.add('key-wide');
            keyItem.innerHTML = createIcon('keyboard_return');
        break;

        case 'keyboard_capslock':
            keyItem.classList.add('key-wide', 'key-activating');
            keyItem.innerHTML = createIcon('keyboard_capslock');
        break;

        case 'shift':
            keyItem.innerHTML = createIcon('arrow_upward');
        break;

        case 'keyboard_option_key':
            keyItem.innerHTML = createIcon('keyboard_option_key');
        break;

        case 'keyboard_command_key':
            keyItem.innerHTML = createIcon('keyboard_command_key');
        break;

        case 'space_bar':
            keyItem.classList.add('key-x-wide');
            keyItem.innerHTML = createIcon('space_bar');
        break;

        case 'keyboard_arrow_left':
            keyItem.classList.add('key-narrow');
            keyItem.innerHTML = createIcon('keyboard_arrow_left');
        break;

        case 'keyboard_arrow_right':
            keyItem.classList.add('key-narrow');
            keyItem.innerHTML = createIcon('keyboard_arrow_right');
        break;

        case 'keyboard_arrow_up':
            keyItem.classList.add('key-narrow');
            keyItem.innerHTML = createIcon('keyboard_arrow_up');
        break;

        case 'keyboard_arrow_down':
            keyItem.classList.add('key-narrow');
            keyItem.innerHTML = createIcon('keyboard_arrow_down');
        break;

        default:
            keyItem.textContent = key.toLowerCase();
    }
    keyboardFragment.appendChild(keyItem);
    if (lineBreak.includes(key)){
        keyboardFragment.appendChild(document.createElement("br"));
    }


})
return keyboardFragment;
}

export {generateKeys};