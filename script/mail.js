$(document).ready(function(){
    $('#form__submit').click(function(){
        // собираем данные с формы
        var name    = $('#name').val();
        var phone    = $('#phone').val();
        var email    = $('#email').val();
        // отправляем данные
        $.ajax({
            url: "mail.php", // куда отправляем
            type: "post", // метод передачи
            dataType: "json", // тип передачи данных
            data: { // что отправляем
                "name":    name,
                "phone": phone,
                "email":   email
            },
            // после получения ответа сервера
            success: function(data){
                $('.messages').html(data.result); // выводим ответ сервера
                if($('.messages').html() == '<span>Сообщение успешно отправлено!</span>') {
                    $('.contact__popup-text').html('<p><span>Take five.</span> Ваше сообщение уже у нас. Дайте нам минут 20 чтобы ответить.</p>');
                    $('.contact__popup-link').trigger( "click" );
                    $("#form").trigger("reset");
                    $('.contact__form-control--main').css('background-color','#ebe6dd');
                } else{
                    $('.contact__form-control--main').css('background-color','#e85e53');
                };
                $( '.contact__form-control--main' ).keypress(function() {
                  $('.contact__form-control--main').css('background-color','#ebe6dd');
                });   
            }
        });
    });
    $('#form__submit--popup').click(function(){
            // собираем данные с формы
            var name    = $('#name').val();
            var phone    = $('#phone').val();
            var email    = $('#email').val();
            // отправляем данные
            $.ajax({
                url: "mail.php", // куда отправляем
                type: "post", // метод передачи
                dataType: "json", // тип передачи данных
                data: { // что отправляем
                    "name":    name,
                    "phone": phone,
                    "email":   email
                },
                // после получения ответа сервера
                success: function(data){
                    $('.messages').html(data.result); // выводим ответ сервера
                    if($('.messages').html() == '<span>Сообщение успешно отправлено!</span>') {
                        $('.contact__popup-text').html('<p><span>Take five.</span> Ваше сообщение уже у нас. Дайте нам минут 20 чтобы ответить.</p>');
                        $('.contact__popup-link').trigger( "click" );
                        $("#form--popup").trigger("reset");
                        $('.contact__form-control--popup').css('background-color','#ebe6dd');
                    } else{
                        $('.contact__form-control--popup').css('background-color','#e85e53');

                    };
                    $( '.contact__form-control--popup' ).keypress(function() {
                      $('.contact__form-control--popup').css('background-color','#ebe6dd');
                    });
                }
            });
        });
});