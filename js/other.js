function searchTheCar(){
	/*var curMake = $("#make option:selected").attr('class');
	var curModel = $("#model option:selected").attr('class');
	var splitModel = curModel.split(' ').join('');
	curModel = splitModel;
	var curYear = $('#year').val();
	var zip = $('#zip').val();*/
	
	var curMake = $('#make').attr('value');
	var curModel = $('#model').attr('value');
	var splitModel = curModel.split(' ').join('');
	curModel = splitModel;
	var curYear = $('#year').attr('value');
	var zip = $('#zip').attr('value');

	if(zip.match(/^[0-9]{5}$/)){
		//$('#carInfoAreaContainer').empty();
		
		$.get("getyears.php", {curMake: curMake, curModel: escape(curModel), curYear: curYear}, function(data){
			if(jQuery.isEmptyObject(data.modelYearHolder)){
				$('#carInfoAreaContainer').empty();
				$('#dealerInfoArea').empty();
				$('#carInfoAreaContainer').append($('<div>There are no models of this make for this year. Try a different year if you would like this car.</div>'));
			}else{
				/*$('#carInfoAreaContainer').empty();
				$('#dealerInfoArea').empty();
				$('#carInfoAreaContainer').append('<h2>Styles</h2>');
				$('#carInfoAreaContainer').append('<select></select>').trigger('create');
				$('#carInfoAreaContainer select').append('<option>Select a style</option>');*/
				for(i in data.modelYearHolder[0].styles){
					$('#carInfoAreaContainer select').append($('<option>'+(data.modelYearHolder[0].styles[i].name)+'</option>').attr({id: data.modelYearHolder[0].styles[i].id, class: data.modelYearHolder[0].makeNiceName}));
				}
				$('#carInfoAreaContainer').append('<div id="carInfo"></div>');
			}
			
			$('#carInfoAreaContainer select').change(function(){
				var selected = this.options[this.selectedIndex];
				var selectedStyle = selected.id;
				var selectedNiceName = ($(selected).attr('class'));
				getAllTheInfo(selectedStyle, zip, selectedNiceName);
			});
		}, "json");
	}else{
			$('#carInfoAreaContainer').empty();
			$('#dealerInfoArea').empty();
			$('#carInfoAreaContainer').append('<p>You must input a legal 5 digit zip code.</p>');
		}
}

function getAllTheInfo(selectedStyle, zip, selectedNiceName){
	showCarPic(selectedStyle);
	showCarInfo(selectedStyle);
	dealerInfo(zip, selectedNiceName);
}

function showCarPic(selectedStyle){
	$('#dealerInfoArea').empty();
	$('#dealerInfoArea').append('<div id="carPicArea"></div>');
	var curModelId = selectedStyle;
	$.get("selectedcarpic.php", {curModelId: curModelId}, function(data){
		for(i in data){
			if(data[i].subType == 'exterior'){
				$('#carPicArea').empty();
				$('#carPicArea').append($('<img src=http://media.ed.edmunds-media.com'+data[i].photoSrcs[0]+' alt="'+data[i].captionTranscript+'"/>'));
			}
		}
	}, "json");
}

function showCarInfo(selectedStyle){
	var curModelId = selectedStyle;
	$.get('getcarinfo.php', {curModelId: curModelId}, function(data){
		$('#carInfo').empty();
		$('#carInfo').append('<h3>Car Information</h3>');
		$('#carInfo').append('<p>Number of Cylinders: '+data.styleHolder[0].engineCylinder+'</p>');
		$('#carInfo').append('<p>Transmission: '+data.styleHolder[0].transmissionType+'</p>');
		$('#carInfo').append('<p>Fuel Type: '+data.styleHolder[0].engineFuelType+'</p>');
		$('#carInfo').append('<p>Base MSRP: $'+data.styleHolder[0].price.baseMSRP+'</p>');
		$('#carInfo').append('<p>True Market value: $'+data.styleHolder[0].price.tmv+'</p>');
		$('#carInfo').append('<p>Private Party: $'+data.styleHolder[0].price.usedPrivateParty+'</p>');
		$('#carInfo').append('<p>Used Retail: $'+data.styleHolder[0].price.usedTmvRetail+'</p>');
		$('#carInfo').append('<p>Used Trade In: $'+data.styleHolder[0].price.usedTradeIn+'</p>');
	}, "json");
}

function dealerInfo(zip, selectedNiceName){
	var userZip = zip;
	var selectedNiceName = selectedNiceName;
	
	$.get('getdealerinfo.php', {userZip: userZip, selectedNiceName: selectedNiceName}, function(data){
		$('#dealerInfoArea').append('<div id="dealerInfo"></div>');
		$('#dealerInfo').append('<h1>Dealer Location Information</h1>');
		
		if(jQuery.isEmptyObject(data.dealerHolder)){
			$('#dealerInfo').append('<p>There are no dealers in this area.</p>');
		}
		$('#dealerInfo').append('<form id="mapForm" action="mapPage.php" method="post" data-ajax="false">');
		for(i in data.dealerHolder){
			var dealer = data.dealerHolder[i].name;
			$('#mapForm').append('<h2>'+dealer+'</h2>');
			var address = (data.dealerHolder[i].address.street);
			var city = (data.dealerHolder[i].address.city);
			var state = (data.dealerHolder[i].address.stateCode);
			$('#mapForm').append('<input type="submit" name="address" value="'+address+', '+city+', '+state+'" />').trigger('create');
		}
	}, "json");
	$('#dealerInfo').append('</form>');
}

$(window).bind('pageinit', function(){
	searchTheCar();
});