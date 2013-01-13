<?php
	require('api_keys.php');
	
	$make = $_GET['curMake'];
	$model = $_GET['curModel'];
	$year = $_GET['curYear'];
	
	$edmundsVehicleYearJSON = file_get_contents('http://api.edmunds.com/v1/api/vehicle/modelyearrepository/foryearmakemodel?make='.$make.'&model='.$model.'&year='.$year.'&api_key='.$edmundsVehicleKey.'&fmt=json');
	
	$specificCarJSON = file_get_contents('http://api.edmunds.com/v1/api/vehicle/'.$make.'/'.$model.'/'.$year.'?api_key='.$edmundsVehicleKey.'&fmt=json');
	
	//print $edmundsVehicleYearJSON;
	print $specificCarJSON;
?>