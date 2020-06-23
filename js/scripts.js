$( document ).ready(function() {
    console.log( "ready!" );

    $( ".project-1" ).click(function() {
        $( "#projects" ).addClass("d-none");  //se oculta la seccion 
        $( "#project-1-detail").removeClass("d-none");    // mostrar id# se remueve la clase d-none index linea 97
    });
    $( ".project-2" ).click(function() {
        $( "#projects" ).addClass("d-none");  //se oculta la seccion 
        $( "#project-2-detail").removeClass("d-none");    
    });
    $( ".project-3" ).click(function() {
        $( "#projects" ).addClass("d-none");  //se oculta la seccion 
        $( "#project-3-detail").removeClass("d-none");    
    });
    $( ".project-4" ).click(function() {
        $( "#projects" ).addClass("d-none");  //se oculta la seccion 
        $( "#project-4-detail").removeClass("d-none");    
    });
    $( ".project-5" ).click(function() {
        $( "#projects" ).addClass("d-none");  //se oculta la seccion 
        $( "#project-5-detail").removeClass("d-none");    
    });
    $( ".project-6" ).click(function() {
        $( "#projects" ).addClass("d-none");  //se oculta la seccion 
        $( "#project-6-detail").removeClass("d-none");    
    });
    $(".close").click(function() {
        $("#projects").removeClass("d-none");
        $(".details").addClass("d-none");
    });

    $('.carousel .vertical .item').each(function(){
        var next = $(this).next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        for (var i=1;i<2;i++) {
            next=next.next();
            if (!next.length) {
                next = $(this).siblings(':first');
              }
          
          next.children(':first-child').clone().appendTo($(this));
        }
      });
 
});