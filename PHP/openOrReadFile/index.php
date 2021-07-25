<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<?
	

	function read_file()
	{
		# code...
		// $file = $_SERVER['DOCUMENT_ROOT'].'_app/views/pages/';
		$file = getcwd().'/index.php';
		$fp = fopen($file, "r");
		while (!feof($fp)) {
			$data = fgets($fp, filesize($file));
			echo "$data";
		}
		fclose($fp);
	}

	?>
	<textarea name="" id="" cols="30" rows="10"><?read_file()?></textarea>
</body>
</html>