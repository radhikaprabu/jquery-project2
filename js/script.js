// When the DOM is ready

$(function() {
	
	//Declare global variable 
	//items is used to store all the information
	var items;
	
	//function that collects data from the json file
	function loadItems() {
		
		//try to get data
		$.getJSON('data.json')
		.done( function(data){
			items = data;
		}).fail(function(){
			$('#fav-things').html("Could not load the Information");
		});
	}
	
	//call the function
	loadItems();
	
		
	//Click on the item button to load the info
	$('#fav-things a').on('click',function(){
		
		//get value of id attr
		var favItem = this.id;
		var $clicked = $(this);
		var itemInfo = '';
		var tabledata = '';
		//loop through
		for (var i = 0; i < items[favItem].length; i++) {
			itemInfo += '<p>' + items[favItem][i].description + '</p>';
			itemInfo += '<table class= "table table-bordered">';
			itemInfo += '<th>' + items[favItem][i].detail.castLabel + '</th>';
			for ( var j=0; j < items[favItem][i].detail.cast.length; j++){
				itemInfo += '<tr><td>' + items[favItem][i].detail.cast[j] + '</td></tr>'
			}
			
			itemInfo += '<tr>'
			itemInfo +=	'<th>' + items[favItem][i].detail.seasonsLabel + '</th>';
			itemInfo +=	'<td>' + items[favItem][i].detail.noOfSeason + '</td>';
			itemInfo += '</tr>'
			
			itemInfo += '<tr>'
			itemInfo +=	'<th>' + items[favItem][i].detail.episodeLabel + '</th>';
			itemInfo +=	'<td>' + items[favItem][i].detail.noOfEpisodes + '</td>';
			itemInfo += '</tr>'
			
			itemInfo += '<tr>'
			itemInfo +=	'<th>' + items[favItem][i].detail.releaseLabel + '</th>';
			itemInfo +=	'<td>' + items[favItem][i].detail.originalRelease + '</td>';
			itemInfo += '</tr>'
			
			itemInfo += '</table>'
			
			var $newdiv = $('<div id="fav-detail"' + itemInfo + '</div>');
			
			var $newButton1 = $("<button>" + "Close" + "</button>").attr({
				id: "button1"
			});
			$newButton1.addClass("btn btn-primary");
			($newdiv).append($newButton1);
			$newButton1.on("click", function () {
			($newdiv).hide();
			$clicked.show();
		});
		}
		
		$clicked.after($newdiv);
		$clicked.hide();
		
		
		
			
	});
});