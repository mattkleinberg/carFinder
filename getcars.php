<?php
	require('api_keys.php');
	
	$edmundsVehicleJSON = file_get_contents('http://api.edmunds.com/v1/api/vehicle/makerepository/findall?api_key='.$edmundsVehicleKey.'&fmt=json');
	
	print $edmundsVehicleJSON;
?>