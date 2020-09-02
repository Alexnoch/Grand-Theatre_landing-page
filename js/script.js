$(document).ready(function(){
    $('.head__logo-burger').click(function(event){
        $('.head__nav-container-burger').slideToggle(300);       //Кнопочка
        $('.head__nav-container-burger').toggleClass('active');  // Большое меню
        $('.head__logo-burger').toggleClass('disable');
         // Кнопочка
    });
});

$(document).ready(function(){
    $('.head__menu-burger-closed').click(function(event){ 
        $('.head__nav-container-burger').slideToggle(100);      // Закрывашка
        $('.head__nav-container-burger').removeClass('active');  // Большое меню                                     
        $('.head__logo-burger').removeClass('disable');
        $('.head__logo-burger').removeClass('disable');  // Кнопочка
    });
});
