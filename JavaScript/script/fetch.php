<?php 
include '../../config/Databases.php';

function search($term){
	// $db = new Database();
	// $db->query('SELECT * FROM users WHERE name LIKE :term');
	// $db->bind('term', '%'.$term.'%');
	// $db->execute();
	return $term;
}
echo json_encode(search($_POST['term']));
?>