
$('#email').on ("click", function(click){

	console.log(click.target.innerText)
	console.log(click.value)
})
$("#email").value = "test"


