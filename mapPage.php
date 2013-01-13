<?php
	$address = $_POST['address'];
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Welcome to Carfinder</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0-beta.1/jquery.mobile-1.2.0-beta.1.min.css" />
		<script src="http://code.jquery.com/jquery-1.8.1.min.js"></script>
		<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6MRPdnVx3XDbyirWNYu5nSfp9BGaubPY&sensor=true"></script>
		<script type="text/javascript" src="js/map.js"></script>
		<link rel = "stylesheet" href="css/style.css" />
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
				<div id="map_canvas"></div>
				<input id="address" type="hidden" value="<?php echo $address ?>" />
				<div id="addressInfo">
					<p>Dealers address: <?php echo $address ?>.</p>
				</div>
			</div>
			<div data-role="footer" id="footer">&nbsp;</div>
		</div>
	</body>
</html
