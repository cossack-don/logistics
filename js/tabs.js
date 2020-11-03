$(function() {
	
	var tab = $('#tabs .tabs-items > div'); 
	tab.hide().filter(':first').show(); 
	
	// Клики по вкладкам.
	$('#tabs .tabs-price-list a').click(function(){
		tab.hide();
		tab.filter(this.hash).fadeIn(1000); 
		$('#tabs .tabs-price-list a').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
 
});