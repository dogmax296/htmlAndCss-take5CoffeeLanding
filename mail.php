<?php
	$msg_box = ""; // в этой переменной будем хранить сообщения формы
	$errors = array(); // контейнер для ошибок
	// проверяем корректность полей
	if($_POST['name'] == "") 	 $errors[] = "Поле 'NAME' не заполнено!";
	if($_POST['phone'] == "") 	 $errors[] = "Поле 'phone' не заполнено!";
	if($_POST['email'] == "") 	 $errors[] = "Поле 'e-mail' не заполнено!";
	if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) $errors[] = "Поле 'e-mail' заполнено не коректно!";
	
	// если форма без ошибок
	if(empty($errors)){		
		// собираем данные из формы
		$message  = "Потенциальный клиент Take5Coffee хочет с нами связаться! Контакты:" ."<br/>" ."Имя: " . $_POST['name'] . "<br/>";
		$message .= "Телефон: " . $_POST['phone'] . "<br/>";
		$message .= "Email: " . $_POST['email'] . "<br/>";
		send_mail($message); // отправим письмо
		// выведем сообщение об успехе
		$msg_box = '<span>Сообщение успешно отправлено!</span>';
	}else{
		// если были ошибки, то выводим их
		$msg_box = "";
		foreach($errors as $one_error){
			$msg_box .= "<span style='color: #ff6b6b;'>$one_error</span><br/>";
		}
	}
	// делаем ответ на клиентскую часть в формате JSON
	echo json_encode(array(
		'result' => $msg_box
	));
	// функция отправки письма
	function send_mail($message){
		// почта, на которую придет письмо
		$mail_to = "evgeny.sokolenko@gmail.com"; 
		// тема письма
		$subject = "Take5Coffee Новая Заявка";
		// заголовок письма
		$headers= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма
		// отправляем письмо 
		mail($mail_to, $subject, $message, $headers);
	}
	