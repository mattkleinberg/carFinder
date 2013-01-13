<?php
	require('api_keys.php');
	
	$curModelId = $_GET['curModelId'];
	
	$selectedCarInfo = file_get_contents('http://api.edmunds.com/v1/api/vehicle/stylerepository/findbyid?id='.$curModelId.'&api_key='.$edmundsVehicleKey.'&fmt=json');
	
	print $selectedCarInfo;
?>