<?php
$host = "localhost";
$user = "root";
$pw = "";
$db = "prodajem_kupujem";

$conn = new mysqli($host, $user, $pw, $db);
if ($conn->connect_errno) {
    printf("Konekcija nije uspela: %s\n", $conn->connect_error);
    exit();
}

?>
