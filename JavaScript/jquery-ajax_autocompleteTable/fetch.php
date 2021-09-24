<?php 

include '../../config/Databases.php';

function search($term){
	$db = new Database();
	$db->query('SELECT * FROM tbl_items WHERE name LIKE :term');
	$db->bind('term', '%'.$term.'%');
	$db->execute();
	return $db->resultSet();
}
echo json_encode(search($_POST['term']));
?>