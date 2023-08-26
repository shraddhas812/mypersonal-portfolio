const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY >100);
});
const contactForm= document.getElementById('contact-form'),
contactMessage= document.getElementById('contact-message')

const sendEmail=(e) =>{
    e.preventDefault()

    emailjs.sendForm('service_okp2uwf','template_7eyrcd6','#contact-form','zAMJY5ohJpgS_qeY4') //serviceid templateid #form publickey
    .then(() =>{
        //show sent message
        contactMessage.textContent='Message sent successfully ✅'
        //remove message after 5 seconds
        setTimeout(() =>{
            contactMessage.textContent= ''

        },5000)
        //clear input fields
        contactForm.reset()
    },() =>{
        //show error message
        contactMessage.textContent ='Message not sent(service error)'
    })
}
contactForm.addEventListener('submit',sendEmail)
let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll=()=>{
menu.classList.remove('bx-x');
navlist.classList.toggle('open');
};
