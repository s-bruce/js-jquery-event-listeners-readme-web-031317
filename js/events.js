function getIt(){
	$('p').on('click', function() {
    alert('Hey!')
	})
}

function frameIt(){
	$('img').on('load', function() {
    $('img').addClass('tasty')
	})
}

function pressIt(){
	$(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('g was pressed');
  }
});
}

function submitIt(){
	$('form').on('submit', function(){
		alert ('Your form is going to be submitted now.')
	})
}


$(document).ready(function(){

	getIt()
	frameIt()
	pressIt()
	submitIt()

});


// Define a function submitIt that does not accept a parameter. The function 
// should bind a submit event to the form that alerts "Your form is going to be 
// submitted now.".