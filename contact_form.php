<?php

    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $mailFrom = $_POST['email'];
        $message = $_POST['message'];
        
        $subject = "RESPONSE FROM WEBSITE";
        $mailTo = "sarvadream09.ss@gmail.com";
        $headers = "From: ".$mailFrom;
        $txt = "You have received e-mail from ".$name.".\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);
        header("Location: index.html?mailsend");

    }

?>