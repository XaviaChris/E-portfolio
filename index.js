template_byiaebq
service_bpdx6ho
tHypjaTPZCFUZ-QEe

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

let isModalOpen = false;
function toggleModal() {
   if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
   }
     isModalOpen = true;
    document.body.classList += " modal--open";
}