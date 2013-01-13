<?php
	require('api_keys.php');
	
	$curModelId = $_GET['curModelId'];
	
	$selectedCarPic = file_get_contents('http://api.edmunds.com/v1/api/vehiclephoto/service/findphotosbystyleid?styleId='.$curModelId.'&api_key='.$edmundsVehicleKey.'&fmt=json');
	
	print $selectedCarPic;
?>