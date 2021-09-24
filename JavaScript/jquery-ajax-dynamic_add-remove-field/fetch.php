<?php
include '../../config/Databases.php';

if ($result = insert($_POST)) {
	return 'Success to add';
}else{
	return 'Failed to add';
}

function insert($term){
	$db = new Database();
	foreach ($term['name'] as $key => $value) {
		if($key == 1) {continue;}
		$db->query('INSERT INTO `tbl_items`(`name`, `value`, `date`) VALUES (:lang, 1, now())');
		$db->bind('lang', $value);
		$db->execute();

	}
	return $db->rowCount();
}

?>