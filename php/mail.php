<?php
// echo("Hello world!");


$name = $_POST['name'];
$mail = $_POST['mail'];
$theme = $_POST['theme'];
$message = $_POST['message'];

// echo($name." ".$theme."\n");
// echo("Hello world!");

$name = htmlspecialchars($name);
$message = htmlspecialchars($message);

$name = urldecode($name);
$message = urldecode($message);

$name = trim($name);
$message = trim($message);
if (mail("maskit-zzz@list.ru", $theme, "ФИО: ".$name.".\n Message: ".$message ,"\nFrom: example2@mail.ru \r\n")) {
     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>
