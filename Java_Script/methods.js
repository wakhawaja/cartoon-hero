function myfunc(){
	var x= document.getElementById("demo");
	x.style.fontSize = "25 px";
	x.style.color="red";
}

var saleTax=0.17;
function calculateTotal(quantity,price){
	var total = quantity*price*(1+saleTax);
	return total.toFixed(2);
}

function calculateTotal2(){
	var saleTotal = calculateTotal($('#quantity').val(),$('#price').val());
	$('#ptext').append("<p>Total Sale is: $"+saleTotal+"</p>");
	$('#total').val("Toatal Sale is: $"+saleTotal);
}