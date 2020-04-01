// alert("Connected");


// To mark task completed or revert back
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

$("ul").on("click", "span", function(event){
	// alert("Clicked on Delete");
	$(this).parent().fadeOut(300, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		var todo_value = $(this).val();
		$("ul").prepend("<li><span><i class=\"fa fa-trash\"></i></span> " + todo_value + "</li>");
		console.log(todo_value + " Added !!");

		$(this).val("");
	}
});

$("i.fa.fa-plus-circle").on("click", function(){
	$("input[type='text']").fadeToggle(300);
});