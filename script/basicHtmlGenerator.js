/**
 * Creates basic html layout for the keyboard
 *
 * @return {html structure}
 */

export default function init(board) {
  /* eslint-disable no-param-reassign */
// create and setup elements
  board.elements.main = document.createElement('div');
  board.elements.main.classList.add('main');

  board.elements.wrapper = document.createElement('div');
  board.elements.wrapper.classList.add('wrapper');

  board.elements.heading = document.createElement('h1');
  board.elements.heading.innerText = 'RSS Virtual Keyboard';
  board.elements.heading.classList.add('heading');

  board.elements.textarea = document.createElement('textarea');
  board.elements.textarea.classList.add('text-area');
  board.elements.textarea.rows = 15;

  board.elements.keyboard = document.createElement('div');
  board.elements.keyboard.classList.add('keyboard');

  board.elements.p = document.createElement('p');
  board.elements.p.classList.add('text');
  board.elements.p.innerText = 'Made in MacOS. Language change on ctrl + shift.';

  // create structure of elements

  board.elements.main.appendChild(board.elements.wrapper);
  board.elements.wrapper.appendChild(board.elements.heading);
  board.elements.wrapper.appendChild(board.elements.textarea);
  board.elements.wrapper.appendChild(board.elements.keyboard);
  board.elements.wrapper.appendChild(board.elements.p);

  // append elements to DOM
  document.body.appendChild(board.elements.main);
  /* eslint-enable no-param-reassign */
}
