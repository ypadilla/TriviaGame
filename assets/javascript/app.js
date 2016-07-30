
$(document).ready(function(){
	$(".answer").hide();
	$(".question").hide();
	$("#ender").hide();
	$("img").hide();
	$("#score").hide();


	var timeLimit = 61;
	var correct = 0;
	var wrong =0;
	var unanswered=0;
	

	$("#startButton").click(function(){


		$("button").hide();
		
		start();
		decrement();
		$(".question").show();
		$(".answer").show();
		$("#ender").show();

	});


	

$("#ender").on("click", stop);




	function start (){
		counter = setInterval(decrement, 1000);

	}

	function decrement(){

		timeLimit--;
		$("#timeClock").html(timeLimit + " seconds remaining");
		if(timeLimit==0){

			stop();



		}

	}

	function stop(){

		clearInterval(counter);
		timeLimit=61;
		correct =0;
		incorrect =0;

		if($("input[name = question1]:checked").val() == $("#ans1").val()){
			correct ++;
		} else {
			incorrect ++;
		}

		if($("input[name = question2]:checked").val() == $("#ans2").val()){
			correct ++;
		} else {
			incorrect ++;
		}

		if($("input[name = question3]:checked").val() == $("#ans3").val()){
			correct ++;
		} else {
			incorrect++;
		}
		if($("input[name = question4]:checked").val() == $("#ans4").val()){
			correct ++;
		} else {
			incorrect ++;
		}

		if($("input[name = question5]:checked").val() == $("#ans5").val()){
			correct ++;
		} else {
			incorrect ++;
		}
		if($("input[name = question6]:checked").val() == $("#ans6").val()){
			correct ++;
		} else {
			incorrect ++;
		}
		if($("input[name = question7]:checked").val() == $("#ans7").val()){
			correct ++;
		} else {
			incorrect ++;
		}
		if($("input[name = question8]:checked").val() == $("#ans8").val()){
			correct ++;
		} else {
			incorrect ++;
		}
		if($("input[name = question9]:checked").val() == $("#ans9").val()){
			correct ++;
		} else {
			incorrect ++;
		}
		if($("input[name = question10]:checked").val() == $("#ans10").val()){
			correct ++;
		} else {
			incorrect ++;
		}
	window.scrollTo(0,0);
	$("img").show();
	$("#score").show();
	$(".answer").empty();
	$(".question").empty();
	$("#timeClock").hide();
	
	$("#ender").hide();
	$("#score").html("You got: " + correct + " right!" + "<br>" + "You got: " + incorrect + " wrong!");


	

}










function reset(){
	timeLimit = 61;
}





});