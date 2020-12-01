<!-- request.php -->
<?php
include '../../config/Databases.php';
function genRandom($len = 1){
	$characters = '0123456789';
	$charactersLen = strlen($characters);
	$random = '';
	for ($i=0; $i < $len ; $i++) { 
		$random .= $characters[rand(0, $charactersLen - 1)];
	}
	return $random;
}

function reqIdNotUsed($random){
	$db = new Database();
	$db->query('SELECT * FROM users WHERE id ='.$random);
	// $db->bind()
	$db->execute();
	return $db->single();
}

function request(){
	$random = genRandom();

	if(!reqIdNotUsed($random)){
	echo('my Number :'.$random.' is Accept');
	}else{
		echo('my Number :'.$random.' Available <br>');
		call_user_func(__FUNCTION__);
	}
}
print_r(request());
?>