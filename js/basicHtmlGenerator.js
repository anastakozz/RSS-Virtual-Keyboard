/**
 * Creates basic html layout for the keyboard
 * 
 * @return {html structure}
 */



export function init(obj) {
//create and setup elements
obj.elements.main = document.createElement('div');
obj.elements.main.classList.add('main'); 

obj.elements.wrapper = document.createElement('div');
obj.elements.wrapper.classList.add("wrapper");

obj.elements.heading = document.createElement('h1');
obj.elements.heading.innerText = 'RSS Virtual Keyboard';
obj.elements.heading.classList.add("heading");

obj.elements.textarea = document.createElement('textarea');
obj.elements.textarea.classList.add("text-area");
obj.elements.textarea.rows = 15;

obj.elements.keyboard = document.createElement('div');
obj.elements.keyboard.classList.add("keyboard");

obj.elements.p = document.createElement('p')
obj.elements.p.classList.add("text");
obj.elements.p.innerText = 'Made in MacOS. Language change on ctrl + shift.';



//create structure of elements

obj.elements.main.appendChild(obj.elements.wrapper);
obj.elements.wrapper.appendChild(obj.elements.heading);
obj.elements.wrapper.appendChild(obj.elements.textarea);
obj.elements.wrapper.appendChild(obj.elements.keyboard);
obj.elements.wrapper.appendChild(obj.elements.p);


//append elements to DOM
    document.body.appendChild(obj.elements.main);   
}

