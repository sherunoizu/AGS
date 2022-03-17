$(document).ready(function(){
    
// PHP mailer
    $('form').submit(function(e) { //обращение ко всем формам на сайте.когда все условия выполнены
        
        e.preventDefault(); // отменить стандартное поведение браузера
        $.ajax({ // отправка данных на сервер
            type: "POST", // отправка
            url: "mailer/smart.php", // путь к обработчику операции
            data: $(this).serialize() // данные которые отправляются на сервер. перевод структуры данных к нужному формату
        }).done(function() { // обработка ответа от сервера (если сервер принял данные)
            const overlay = document.querySelector(`.modal__overlay`);
            $(this).find("input").val(""); // найти инпут и установить велью в "пусто"
            // $('#consultation, #order').fadeOut();// скрыть формы
            overlay.classList.add(`active`); // показать оверлей и форму благодарности
            $('form').trigger('reset'); // триггер - сброс всех форм
        });
        return false; 
    });
});

