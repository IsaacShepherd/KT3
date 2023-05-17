let div_root = document.querySelector('#root')

let div_target = document.querySelector('#target')

let isMove = false

div_target.addEventListener('mousedown', () => {

    isMove = true

})

div_target.addEventListener('mouseup', () => {

    isMove = false

})

div_root.addEventListener('mousemove', (e) => {

    if (isMove){

        moveElem(e)

    }

})

function moveElem(e){

    let x_pos = e.pageX
    console.log(x_pos);
    if (x_pos <= 10) {
        div_target.style.left = 0 +'px';
        isMove = false;       
    }
    else if (x_pos >= 490) {
        div_target.style.left = 490 +'px';
        // isMove = false;  
    }
    else{
        div_target.style.left = (x_pos-10) +'px'
    }
    console.log(isMove);   

}
