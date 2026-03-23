// template_byiaebq
// service_bpdx6ho
// tHypjaTPZCFUZ-QEe

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    console.log(x, y)

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x *  boolInt}px, ${y *  boolInt}px)`
    }

}



function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
     document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove ("dark-theme")
    }
  
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visiable";

    emailjs
        .sendForm(
            'service_bpdx6ho', 
            'template_byiaebq',
            event.target,
            'tHypjaTPZCFUZ-QEe'
        )
        .then (() => {
            loading.classList.remove("modal__overlay--visiable");
            success.classList += " modal__overlay--visiable";
        } )  .catch(() => {
            loading.classList.remove("modal__overlay--visiable");
            alert(
                "The email service is temporarily unavaliable. Please contact me directly at XaviaChristopher@gmail.com"
        );
        } ) ;  

}


function toggleModal() {
   if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
   }

     isModalOpen = true;
    document.body.classList += " modal--open";
}