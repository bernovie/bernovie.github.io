<!DOCTYPE HTML>
<html>
<head>
	<title>Chattie Chat</title>
	<link rel="stylesheet" href="css/style.css" type="text/css">
</head>
<body>
<h1 class="title">Chattie Chat</h1>
<div id="login_signup">
	<p>"Chattie Chat is the #1 chat website"<br><i>-New York Times</i></p>
	<form id="initial_form" name="form" action="" method="get">
		<p>Email Address</p><br>
		<div class="input_div">
		<input type="text" class="text_input" name="email" placeholder="email" value=""/>
		</div>
		<br><p>Password</p><br>
		<div class="input_div">
		<input type="password" class="text_input" name="password" placeholder="password" value="" />
		</div>
		<div id="initial_buttons">
			<input type="submit" class="login_button" value="Log In"/>
		</div>
	</form>
	<div id="initial_buttons">
		<hr>
		<form action="signup.php" name="signup_form">
			<p id="or">Don't have an account yet?</p>
			<button class="signup_button">Sign up</button>
		</form>
	</div>
</div>
<?php
	$servername = "127.0.0.1";
	$username = "root";
	$password = "starwars25m";
	$dbname = "chat";
	
	$conn = new mysqli($servername, $username, $password, $dbanme);
	
	if($conn->connect_error){
		die("Connection Failed: ".$conn->connect_error);
	}
	
	$email = $_GET['email'];
	$password = $_GET['password'];
	$sql = "use chat";
	$conn->query($sql);
	$sql = "select * from users where email = '$email'";
	$result = $conn->query($sql);

	if(mysqli_num_rows($result) > 0 && $email != ''){
		echo "Email exists in database <br>";
		$sql = "select * from users where email = '$email' and password = '$password'";
		$result = $conn->query($sql);

		if(mysqli_num_rows($result) > 0){
			echo "Your email and password are correct";
		}else{
			echo "Your password is wrong";
		}
	}
	else {
		echo "You have not yet created an account or your email is wrong";
	}
	
	$conn->close();
?>
</body>
</html>
