<!-- request.php -->
<?php
include '../Databases.php';
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
	echo('My data :'.$random.' <br>');

	if(!reqIdNotUsed($random)){
	echo('My data :'.$random.' is Accept');
	}else{
		request();
	}
}
print_r(request());
?>