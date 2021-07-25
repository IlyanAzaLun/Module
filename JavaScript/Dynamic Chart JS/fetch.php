<?php 

include '../../config/Databases.php';


if (isset($_POST['action'])) {
	if ($_POST['action'] == 'input') {
		echo json_encode(insert($_POST));
	}

	else if ($_POST['action'] == 'fetch') {
		$result = select();
		$data   = array();
		foreach ($result as $row) {
			$data[] = array (
				'language' => $row['name'],
				'total'    => $row['total'],
				'color'    => '#'.rand(100000, 999999)
			);
		}
		echo json_encode($data);
	}
}

function select(){
	$db = new Database();
	$db->query('SELECT name, SUM(`value`) as total FROM tbl_items GROUP BY `name`');
	$db->execute();
	return $db->resultSet();
}

function insert($term){
	$db = new Database();
	$db->query('INSERT INTO `tbl_items`(`name`, `value`, `date`) VALUES (:lang, 1, now())');
	$db->bind('lang', $term['lang']);
	$db->execute();
	return $db->rowCount();
}

?>