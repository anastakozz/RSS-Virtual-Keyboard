/* eslint-disable no-param-reassign */
const toggleCups = () => {
  this.properties.capsLock = !this.properties.capsLock;
  this.elements.keys.forEach((key) => {
    if (key.childElementCount === 0 && key.textContent !== 'esc' && key.textContent !== 'ctrl') {
      key.textContent = this.properties.capsLock
        ? key.textContent.toUpperCase()
        : key.textContent.toLowerCase();
    }
  });
};

export default function highliteKeys(board) {
  document.addEventListener('keydown', (event) => {
    if (event.code[0] === 'K') {
      // document.querySelector(`.${event.key}`).classList.add('active');
    } else {
      document.querySelector(`.${event.code}`).classList.add('active');
      if (event.code === 'CapsLock') {
        document.querySelector(`.${event.code}`).classList.toggle('key-activated');
        toggleCups(board);
      }
    }
  });

  document.addEventListener('keyup', (event) => {
    if (event.code[0] === 'K') {
      // document.querySelector(`.${event.key}`).classList.remove('active');
    } else {
      document.querySelector(`.${event.code}`).classList.remove('active');
      if (event.code === 'CapsLock') {
        document.querySelector(`.${event.code}`).classList.toggle('key-activated');
        toggleCups(board);
      }
    }
  });
}
