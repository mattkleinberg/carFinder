<?php
	$make = $_POST['make'];
	$model = $_POST['model'];
	$year = $_POST['year'];
	$zip = $_POST['zip'];
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to Carfinder</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0-beta.1/jquery.mobile-1.2.0-beta.1.min.css" />
		<script src="http://code.jquery.com/jquery-1.8.1.min.js"></script>
		<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
		<link rel = "stylesheet" href="css/style.css" />
		<script src="js/other.js"></script>
	</head>
	<body>
		<div data-role="page">
			<div data-role="header">
				<div id="header">&nbsp;</div>
					<div data-role="navbar">
						<ul>
							<li><a href="home.html">Home</a></li>
							<li><a href="carfinder.html" data-ajax="false">Get Started</a></li>
							<li><a href="about.html">About</a></li>
						</ul>
					</div>
				</div>
			<div data-role="content" id="content">
				<input id="make" type="hidden" value="<?php echo $make ?>" />
				<input id="model" type="hidden" value="<?php echo $model ?>" />
				<input id="year" type="hidden" value="<?php echo $year ?>" />
				<input id="zip" type="hidden" value="<?php echo $zip ?>" />
				<div id="carInfoArea">
					<div id="carInfoAreaContainer">
						<h2>Styles</h2>
						<select>
							<option>Select a style</option>
						</select>
					</div>
					<div id="dealerInfoArea">
					</div>
				</div>
				<div class="bottomButton"><a href="carfinder.html" data-role="button" data-ajax="false">Back</a></div>
			</div>
			<div class="footWrapper"><div data-role="footer" id="footer">&nbsp;</div></div>
		</div>
	</body>
</html
