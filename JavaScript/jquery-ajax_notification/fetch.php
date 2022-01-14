<?php 
include '../../config/Databases.php';

if ($_POST['type']=='login') {
	$data = login();
	if (isset($data['user'])) {
		session_start();
		$_SESSION["id_user"] = $data['id'];
		$_SESSION["user"] = $data['user'];
		header('Location: '.$_SERVER['HTTP_REFERER']);
	}else{
		return false;
	}
}elseif ($_POST['type']=='load') {
	echo json_encode(load());
}else{
	echo 'ok';
}

function login(){
	$db = new Database();
	$db->query("
		SELECT * FROM tbl_user 
		WHERE user = :user AND password = :password;
		");
	$db->bind('user', $_POST['user']);
	$db->bind('password', $_POST['password']);
	$db->execute();
	return $db->single();
}

function load(){
	$db = new Database();
	$db->query("
		SELECT * FROM tbl_questions
		");
	$db->execute();
	return $db->resultSet();	
}

function is_user_alredy_like(){
	$db = new Database();
	$db->query("
		SELECT * FROM tbl_questions 
		WHERE id = :quetsion_id AND user_id = :user_id;
		");
	$db->bind('content_id', $data);
	$db->bind('user_id', $data);
	$db->execute();
	return $db->rowCount();
}

?>