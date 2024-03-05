function closeModal(){
    $('#exampleModalCenter').modal('hide');
}
$(document).ready(function (){
    $("#abrirAnimal").click(function (){
        $('#exampleModalCenter').modal('show');
    })
})