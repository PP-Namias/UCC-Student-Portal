const parent = document.querySelectorAll('.js-input');


window.addEventListener('pageshow', () => {
    parent.forEach(e => {

        e.addEventListener('focus', (e) => {
            focusState(e.target);
        })
        e.addEventListener('blur', (e) => {
            blurState(e.target);
        })

        focusState(e);
        blurState(e);
    });     
})

function focusState(e){
    parentEl = e.parentElement;
    parentEl.classList.add('focus');
}

function blurState(e){
    parentEl = e.parentElement;
    if(!e.value){
        parentEl.classList.remove('focus');
    }
}

const passInput = document.querySelector('.js-pass')
const showHidePass = document.querySelector('#show-hide-pass')

showHidePass.addEventListener('click', () => {
    if(passInput.type == "password"){
        passInput.type = "text";
        showHidePass.src = "assets/hidePass.svg"
    }else{
        passInput.type = "password";
        showHidePass.src = "assets/showPass.svg"
    }
});

console.log(passInput);