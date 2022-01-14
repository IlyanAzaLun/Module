<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<!-- Own Script -->
	<script type="text/javascript" src="http://localhost/2020/Module/assets/vendor/jquery/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="http://localhost/2020/Module/JavaScript/script/ajax-request.js"></script>
	
	<script type="text/javascript" src="http://localhost/2020/Module/assets/vendor/chart.js/Chart.bundle.min.js"></script>
	<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'>
</head>
<body>
	<?session_start();if(isset($_SESSION["user"])){?>
	<div class="container">
		<h2 align="center">PHP Like System with Notification using Ajax Jquery</h2>
		<br />
		<div align="right">
			<a href="logout.php">Logout</a>
		</div>
		<br />
		<nav class="navbar navbar-inverse">
			<div class="container-fluid">
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown"><span class="label label-pill label-danger count"></span> Notification <b><?=$_SESSION["user"]?></b></a>
						<ul class="dropdown-menu"></ul>
					</li>
				</ul>
			</div>
		</nav>
		<form method="post" id="form_wall">
			<textarea name="content" id="content" class="form-control" placeholder="Share any thing what's in your mind"></textarea>
			<div align="right">
				<input type="submit" name="submit" id="submit" class="btn btn-primary btn-sm" value="Post" />
			</div>
		</form>
		<h4>Latest Post</h4>
		<div id="website_stuff"></div>
	</div>
	<?}else{?>
	<div class="container">
		<h2 align="center">PHP Like System with Notification using Ajax Jquery</h2>
		<br />
		<div class="panel panel-default">
			<div class="panel-heading">Login</div>
			<div class="panel-body">
				<form method="post" action="fetch.php">
					<div class="form-group">
						<label>User</label>
						<input type="hidden" name="type" value="login" />
						<input type="text" name="user" class="form-control" />
					</div>
					<div class="form-group">
						<label>Password</label>
						<input type="password" name="password" class="form-control" />
					</div>
					<div class="form-group">
						<input type="submit" name="login" id="login" class="btn btn-info" value="Login" />
					</div>
				</form>

			</div>
		</div>
	</div>
	<?}?>
</body>
<script type="text/javascript" src="app.js"></script>
</html>