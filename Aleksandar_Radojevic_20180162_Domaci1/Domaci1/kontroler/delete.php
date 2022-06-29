<?php

include("../broker.php");


if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $query = "DELETE FROM oglas WHERE oglasID=$id";
    $result = $conn->query($query);

    if (!$result) {
        die("Upit nije izvrsen!");
    }
    header("Location:../home.php");
} else {
    echo "GET NIJE IZVRSEN";
}
