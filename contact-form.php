<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $subject = $_POST['subject'] ?? '';
    $message = $_POST['message'] ?? '';

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header('Location: contact.html?error=Invalid email format');
        exit(1);
    }

    // Your email address
    $toEmail = 'nithuna@rejola.com';

    $textmsg = 'You have an Enquiry'; // Define $textmsg

    $msg = "<h2>$textmsg</h2><br>"; 
    $msg .= "<span style='font-size:18px;'>Name: $name</span><br><br>"; 
    $msg .= "<span style='font-size:18px;'>Email: $email</span><br>";
    $msg .= "<span style='font-size:18px;'>Subject: $subject</span><br>";
    $msg .= "<span style='font-size:18px;'>Message: $message</span><br><br>";
    $msg .= "<em style='font: size 16px;'>Thanks & Regards,</em><br>";
    $msg .= "<strong style='font: size 16px;'>Wings Publications</strong><br>";

    function sendEmail($name, $email, $subject, $message, $toEmail, $msg) {
        $mail = new PHPMailer(true);
        try {
            //Server settings
            $mail->SMTPDebug = 2;                                 
            $mail->isSMTP();                                      
            $mail->Host = 'rejola.com';  
            $mail->SMTPAuth = true;                               
            $mail->Username = 'mail@rejola.com';                 
            $mail->Password = 'gk)4duXc!Hp';                           
            $mail->SMTPSecure = 'ssl';                            
            $mail->Port = 465;                                    

            //Recipients
            $mail->setFrom($email, 'Sent by');
            $mail->addAddress($toEmail, 'Receive by');     

            //Content
            $mail->isHTML(true);                                  
            $mail->Subject = $subject;
            $mail->Body    = $msg;

            if ($mail->send()) {
                return true;
            } else {
                return false;
            }
        } catch (Exception $e) {
            return false;
        }
    }

    if (sendEmail($name, $email, $subject, $message, $toEmail, $msg)) {
        header('Location: contact.html?message=Message sent successfully!');
    } else {
        header('Location: contact.html?error=Message could not be sent.');
    }
}
?>
