function populateOptions(){
	$.get("getcars.php",{},function(data){
		for(i in data.makeHolder){
				$('#make').append($('<option>'+(data.makeHolder[i].name)+'</option>').attr({id: data.makeHolder[i].id, class: data.makeHolder[i].niceName}));
			}
			$('#make').change(function(){
				var selected = this.options[this.selectedIndex];
				for(i in data.makeHolder){
					if(selected.id == data.makeHolder[i].id){
						$("#model").empty();
						for(j in data.makeHolder[i].models){
							$('#model').append($('<option>'+(data.makeHolder[i].models[j].name)+'</option>').attr({id: data.makeHolder[i].models[j].id, class: data.makeHolder[i].models[j].name.toLowerCase()}));
						}
					}
				}
			});
	}, "json");
}

$(document).bind('pageinit', function(){
	populateOptions();
});