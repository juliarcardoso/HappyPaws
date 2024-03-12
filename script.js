function closeModal(){
    $('#exampleModalCenter').modal('hide');
}
$(document).ready(function (){
    $("#abrirAnimal").click(function (){
        $('#exampleModalCenter').modal('show');
    })

    let applyButton = document.querySelector(".buttonForm");
    applyButton.addEventListener("click", more);
})

function more() {
    let firstName = prompt("What is your first name?");
    let email = prompt("What is your email address?");    
    alert("Hi " + firstName + "! Welcome to Happy Paws, we will be in touch soon 🤗");
}

         