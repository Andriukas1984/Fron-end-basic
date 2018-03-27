var arr =[];
var btn_rand = document.getElementById("rand");

btn_rand.addEventListener("click", rand);

var dice1 = document.getElementById("dice1");

retrieveLocalStorage();



function rand() {
    var x = Math.floor((Math.random() * 6) + 1);
    var y = parseInt(document.getElementById("skaicius").value);
	
	//console.log(y);
	
	displaydice(x,y);
	
	document.getElementById("result").innerHTML = p;
	
	arr.push( x + " and " + y );
	
if(y === x){
	var p = '<br> <hr><span class="flashit"> You Win </span><br> Yours number: ' +y; 
	document.getElementById("result").innerHTML = x + p;
	display(arr);
}
else {
	var p ='<br> <hr><span class="flashit1"> You lost </span> <br> Yours number: ' +y;
	document.getElementById("result").innerHTML =  x + p;
	display(arr);
	
}
	
//document.getElementById("add").innerHTML =  dispalay(arr);

localStorage.setItem("ScoreBoard", arr);
	console.log("arr type:"+typeof arr);

}


function display(a){
	var result='';
	for(var i = 0; i<a.length; i++)
	result += "<p>" + a[i] + "</p>"
	//return result;
	
	document.getElementById("history").innerHTML = result;
}
function retrieveLocalStorage(){
	//paroditi resultatus is issaugoto masivo
	var saved_data_string = localStorage.getItem("ScoreBoard");
	//console.log("_arr type:"+typeof saved_data);
	
	//Jeigu pirma karta perkrovus puslapi, saved_data_array gali but null
	var saved_data_array = [];
	if(saved_data_string != null){
		saved_data_array = saved_data_string.split(',');
	}
	
	//console.log("saved_data_array type:"+typeof saved_data_array);
	display(saved_data_array);
}

function displaydice(x) {
	dice1.src = "img/dice "+x+".png";
	
}






