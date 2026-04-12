<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

error_reporting(0);

header('Content-Type: application/json');

$response = [];

try {

    if ($_SERVER["REQUEST_METHOD"] !== "POST") {
        throw new Exception("Invalid request");
    }

    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';

    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;

    // 🔐 YOUR GMAIL DETAILS
    $mail->Username = 'mahidul.rbl.cse.du@gmail.com';
    $mail->Password = 'fixd myfj aesb fazi'; // Gmail App Password

    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom($email, $name);
    $mail->addAddress('mahidul.rbl.cse.du@gmail.com');

    $mail->Subject = $subject;
    $mail->Body = $message;

    $mail->send();

    $response = [
        "status" => "success",
        "message" => "Message sent successfully ✅"
    ];

} catch (Exception $e) {

    $response = [
        "status" => "error",
        "message" => "Message failed ❌"
    ];
}

echo json_encode($response);
exit;