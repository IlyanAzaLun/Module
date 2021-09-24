<?php 
include '../../config/Databases.php';

function questions(){
	$db = new Database();
	$db->query('SELECT * FROM tbl_questions');
	// $db->bind()
	$db->execute();
	return $db->resultSet();
}
function answers($id){
	$db = new Database();
	$db->query('SELECT * FROM tbl_answers WHERE question_id = '.$id);
	$db->execute();
	return $db->resultSet();
}

foreach (questions() as $key => $value) {
	$value['id'] = answers($value['id']);
	$data[] = $value;
}
echo json_encode($data);
?>