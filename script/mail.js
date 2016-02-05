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
                } else{
                     $('.contact__popup-text').css('text-align','center');
                    $('.contact__popup-text').html('<p><span>Take five.</span> Заполните все поля</p>');
                    $('.contact__popup-link').trigger( "click" );
                }
                
            }
        });
    });
});