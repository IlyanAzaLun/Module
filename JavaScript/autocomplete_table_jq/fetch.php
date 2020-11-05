<?php 
$connect = new PDO("mysql:host=localhost; dbname=test", "root", "");

$query = "SELECT * FROM items WHERE item_name LIKE '%".$_POST['term']."%'";

$statment = $connect->prepare($query);
$statment->execute();
$result = $statment->fetchAll();

echo json_encode($result);
?>