
const toggleCups = (board) => {
    board.properties.capsLock = !board.properties.capsLock;
    for (const key of board.elements.keys) {
        if (key.childElementCount === 0 && key.textContent !== 'esc' && key.textContent !== 'ctrl') {
            key.textContent = board.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
        }
    }
}

const highliteKeys = (board) => {
    document.addEventListener('keydown', function(event){
        if(event.code[0] === 'K'){
            document.querySelector(`.${event.key}`).classList.add('active');
        } else{
            document.querySelector(`.${event.code}`).classList.add('active');
            if(event.code === 'CapsLock'){
                document.querySelector(`.${event.code}`).classList.toggle('key-activated');
                toggleCups(board);
            }
        } 
    })

    document.addEventListener('keyup', function(event){
        if(event.code[0] === 'K'){
            document.querySelector(`.${event.key}`).classList.remove('active');
        } else{
            document.querySelector(`.${event.code}`).classList.remove('active');
            if(event.code === 'CapsLock'){
                document.querySelector(`.${event.code}`).classList.toggle('key-activated');
                toggleCups(board);
            }
        }
    })
}

export {highliteKeys};