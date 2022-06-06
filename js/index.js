$('img').css({'cursor': 'pointer'});


$('img').attr('data-bs-toggle', 'modal');
$('img').attr('data-bs-target', '#exeModal');


$('#exeModal').on("show.bs.modal", function(event){
    var clickedimg = $(event.relatedTarget);
    var src_var = clickedimg.attr('src');
    var alt_var = clickedimg.attr('alt');
    $('#modalImage').attr('src', src_var);
    $('#modalImage').attr('alt', alt_var);
});