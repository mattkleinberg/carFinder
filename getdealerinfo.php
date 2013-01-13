<?php
	require('api_keys.php');
	
	$zip = $_GET['userZip'];
	$styleId = $_GET['selectedNiceName'];
	
	$edmundsDealerInfoJSON = file_get_contents('http://api.edmunds.com/v1/api/dealer?zipcode='.$zip.'&makeName='.$styleId.'&api_key='.$edmundsDealerKey.'&fmt=json');
	
	print $edmundsDealerInfoJSON;
?>