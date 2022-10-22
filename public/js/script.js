let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    dropitem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    dropitem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    dropitem.classList.remove('active');
}

let dropitem = document.querySelector("#lista");

function list() {
    dropitem.classList.toggle('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');

}


// let btn = document.querySelector("#navbarDropdown");
// let icon = document.querySelector(".fa-caret-right");



// btn.onclick = function (){
//     if(dropitem.classList == false){
//         icon.classList.replace("fa-caret-right", "fa-caret-down");
//     }
//     else{
//         icon.classList.replace("fa-caret-down", "fa-caret-right");
//     }
// }

// btn.onclick = function (){
//     if(icon.classList.contains("fa-caret-right")){
//         icon.classList.replace("fa-caret-right", "fa-caret-down");
//     }
//     else{
//         icon.classList.replace("fa-caret-down", "fa-caret-right");
//     }
// }




// let dropitem = document.querySelector('#lista');
// function list(){

//     dropitem.classList.add("active")
//     if()
//     // dropitem.classList.toggle('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active')
// }


// const $drop = document.querySelector('#navbarDropdown');
// const $dropitem = document.querySelector('.lista')

// $drop.addEventListener('click', function(e){
//   //reset a ação padrão do click
//   e.preventDefault();

//   //adiciona e retira classe da lista do menu
//   $dropitem.classList.toggle('lista--open');
// })

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

function mascara(telefone) {
    if (telefone.value.length == 0)
        telefone.value = '(' + telefone.value;
    if (telefone.value.length == 3)
        telefone.value = telefone.value + ')';

    if (telefone.value.length == 9)
        telefone.value = telefone.value + '-';
}

function sendMail() {
    var params = {
        name: document.getElementById('name').value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    }

    const serviceID = "service_y011dzo";
    const templateID = "template_iekkssv";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Sua mensagem foi enviada com sucesso!");

        })
        .catch((err) => console.log(err));
}